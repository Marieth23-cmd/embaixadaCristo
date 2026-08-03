"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { Database, FollowUp, Person, Schedule } from "./types";

const DB_KEY = "igreja:dados:v1";
const USER_KEY = "igreja:responsavel:v1";

const EMPTY: Database = { people: [], followUps: [], schedules: [] };

let cache: Database = EMPTY;
let userCache: string = "";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function loadDb(): Database {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(DB_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Database>;
    cache = {
      people: parsed.people ?? [],
      followUps: parsed.followUps ?? [],
      schedules: parsed.schedules ?? [],
    };
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function saveDb(next: Database) {
  cache = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(DB_KEY, JSON.stringify(next));
  }
  emit();
}

let hydrated = false;

function getSnapshot(): Database {
  if (!hydrated) {
    hydrated = true;
    loadDb();
  }
  return cache;
}

function getServerSnapshot(): Database {
  return EMPTY;
}

export function useDatabase(): Database {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function getUserSnapshot(): string {
  if (typeof window === "undefined") return "";
  if (!userCache) userCache = window.localStorage.getItem(USER_KEY) ?? "";
  return userCache;
}

export function useCurrentUser() {
  const name = useSyncExternalStore(subscribe, getUserSnapshot, () => "");

  const signIn = useCallback((value: string) => {
    userCache = value.trim();
    window.localStorage.setItem(USER_KEY, userCache);
    emit();
  }, []);

  const signOut = useCallback(() => {
    userCache = "";
    window.localStorage.removeItem(USER_KEY);
    emit();
  }, []);

  return { name, signIn, signOut };
}

export function currentUser(): string {
  return getUserSnapshot();
}

const uid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

export function addPerson(data: Omit<Person, "id" | "createdAt" | "createdBy">) {
  const person: Person = {
    ...data,
    id: uid(),
    createdAt: new Date().toISOString(),
    createdBy: currentUser(),
  };
  saveDb({ ...cache, people: [person, ...cache.people] });
  return person;
}

export function updatePerson(id: string, data: Partial<Person>) {
  saveDb({
    ...cache,
    people: cache.people.map((p) => (p.id === id ? { ...p, ...data } : p)),
  });
}

export function addFollowUp(data: Omit<FollowUp, "id" | "createdAt" | "createdBy">) {
  const item: FollowUp = {
    ...data,
    id: uid(),
    createdAt: new Date().toISOString(),
    createdBy: currentUser(),
  };
  saveDb({ ...cache, followUps: [item, ...cache.followUps] });
  return item;
}

export function addSchedule(
  data: Omit<Schedule, "id" | "createdAt" | "createdBy" | "done">,
) {
  const item: Schedule = {
    ...data,
    id: uid(),
    done: false,
    createdAt: new Date().toISOString(),
    createdBy: currentUser(),
  };
  saveDb({ ...cache, schedules: [item, ...cache.schedules] });
  return item;
}

export function completeSchedule(id: string) {
  const schedule = cache.schedules.find((s) => s.id === id);
  if (!schedule || schedule.done) return;

  const followUp: FollowUp = {
    id: uid(),
    personId: schedule.personId,
    type: schedule.type === "ligacao" ? "ligacao" : schedule.type === "visita" ? "visita" : "outro",
    notes: schedule.notes
      ? `Agendamento concluído — ${schedule.notes}`
      : "Agendamento concluído",
    createdAt: new Date().toISOString(),
    createdBy: currentUser(),
  };

  saveDb({
    ...cache,
    followUps: [followUp, ...cache.followUps],
    schedules: cache.schedules.map((s) => (s.id === id ? { ...s, done: true } : s)),
  });
}

export function removeSchedule(id: string) {
  saveDb({ ...cache, schedules: cache.schedules.filter((s) => s.id !== id) });
}