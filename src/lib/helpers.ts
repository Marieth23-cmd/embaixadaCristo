import type { Database, FollowUp, Person } from "./types";

export function monthKey(iso: string) {
  return iso.slice(0, 7);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDateTime(iso: string) {
  return `${formatDate(iso)} às ${formatTime(iso)}`;
}

export function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function weekRange(base = new Date()) {
  const day = (base.getDay() + 6) % 7;
  const start = new Date(base);
  start.setDate(base.getDate() - day);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return { start: todayKey(start), end: todayKey(end) };
}

export function personFollowUps(db: Database, personId: string): FollowUp[] {
  return db.followUps
    .filter((f) => f.personId === personId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function wasVisited(db: Database, personId: string) {
  return db.followUps.some((f) => f.personId === personId && f.type === "visita");
}

export function hasFollowUp(db: Database, personId: string) {
  return db.followUps.some((f) => f.personId === personId);
}

export function personById(db: Database, id: string): Person | undefined {
  return db.people.find((p) => p.id === id);
}

export function lastOfType(db: Database, personId: string, type: FollowUp["type"]) {
  return personFollowUps(db, personId).find((f) => f.type === type);
}

export function monthLabel(key: string) {
  const [y, m] = key.split("-");
  const date = new Date(Number(y), Number(m) - 1, 1);
  return date.toLocaleDateString("pt-PT", { month: "short", year: "2-digit" });
}

export function lastMonths(count: number): string[] {
  const now = new Date();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (count - 1 - i), 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  });
}