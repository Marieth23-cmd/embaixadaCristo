"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  FiPlus,
  FiSearch,
  FiEye,
  FiEdit2,
  FiCheckSquare,
  FiCalendar,
} from "react-icons/fi";

import { AppShell } from "../../Components/AppShell";
import { Badge, Button, Card, EmptyState, Input } from "../../Components/UI";
import { Modal } from "../../Components/Modal";
import { PersonForm } from "../../Components/PersonForm";
import { FollowUpForm } from "../../Components/FollowUpForm";
import { ScheduleForm } from "../../Components/ScheduleForm";

import {
  addFollowUp,
  addPerson,
  addSchedule,
  updatePerson,
  useDatabase,
} from "@/lib/store";

import { formatDate, wasVisited } from "@/lib/helpers";
import type { Person } from "@/lib/types";

const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "visitante", label: "Visitantes" },
  { id: "membro", label: "Pretende ser membro" },
  { id: "visitados", label: "Visitados" },
  { id: "nao-visitados", label: "Não visitados" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export default function PessoasPage() {
  const db = useDatabase();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterId>("todos");
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState<Person | null>(null);
  const [followUpFor, setFollowUpFor] = useState<Person | null>(null);
  const [scheduleFor, setScheduleFor] = useState<Person | null>(null);

  const rows = useMemo(() => {
    const term = search.trim().toLowerCase();
    return db.people.filter((p) => {
      if (term && !p.name.toLowerCase().includes(term)) return false;
      if (filter === "visitante" || filter === "membro") return p.type === filter;
      if (filter === "visitados") return wasVisited(db, p.id);
      if (filter === "nao-visitados") return !wasVisited(db, p.id);
      return true;
    });
  }, [db, search, filter]);

  return (
    <AppShell
      title="Pessoas"
      description="Cadastro central de visitantes e futuros membros."
      actions={
        <Button onClick={() => setCreating(true)}>
          <FiPlus className="h-4 w-4" />
          Novo cadastro
        </Button>
      }
    >
      <Card className="mb-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-xs">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar por nome"
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                  filter === f.id
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {rows.length === 0 ? (
        <EmptyState
          title="Nenhuma pessoa encontrada"
          description="Registe um novo visitante para começar o acompanhamento."
        />
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Nome</th>
                  <th className="px-5 py-3 font-medium">Contacto</th>
                  <th className="px-5 py-3 font-medium">Tipo</th>
                  <th className="px-5 py-3 font-medium">Situação</th>
                  <th className="px-5 py-3 font-medium">Cadastro</th>
                  <th className="px-5 py-3 text-right font-medium">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((p) => (
                  <tr key={p.id} className="transition-colors hover:bg-slate-50">
                    <td className="px-5 py-3">
                      <Link
                        href={`/Pessoas/${p.id}`}
                        className="font-medium text-slate-900 hover:text-blue-700"
                      >
                        {p.name}
                      </Link>
                      <p className="text-xs text-slate-400">{p.location || "Sem localização"}</p>
                    </td>
                    <td className="px-5 py-3 text-slate-600">{p.contact || "—"}</td>
                    <td className="px-5 py-3">
                      <Badge tone={p.type === "membro" ? "gold" : "blue"}>
                        {p.type === "membro" ? "Pretende ser membro" : "Visitante"}
                      </Badge>
                    </td>
                    <td className="px-5 py-3">
                      <Badge tone={wasVisited(db, p.id) ? "green" : "slate"}>
                        {wasVisited(db, p.id) ? "Visitado" : "Não visitado"}
                      </Badge>
                    </td>
                    <td className="px-5 py-3 text-slate-500">{formatDate(p.createdAt)}</td>
                    <td className="px-5 py-3">
                      <div className="flex justify-end gap-1">
                        <Link href={`/Pessoas/${p.id}`} title="Visualizar">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-700">
                            <FiEye className="h-4 w-4" />
                          </span>
                        </Link>
                        <button
                          title="Editar"
                          onClick={() => setEditing(p)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-700"
                        >
                          <FiEdit2 className="h-4 w-4" />
                        </button>
                        <button
                          title="Adicionar acompanhamento"
                          onClick={() => setFollowUpFor(p)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-700"
                        >
                          <FiCheckSquare className="h-4 w-4" />
                        </button>
                        <button
                          title="Agendar acompanhamento"
                          onClick={() => setScheduleFor(p)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-yellow-50 hover:text-yellow-700"
                        >
                          <FiCalendar className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal open={creating} title="Novo cadastro" onClose={() => setCreating(false)}>
        <PersonForm
          onCancel={() => setCreating(false)}
          onSubmit={(values) => {
            addPerson(values);
            setCreating(false);
          }}
        />
      </Modal>

      <Modal open={Boolean(editing)} title="Editar cadastro" onClose={() => setEditing(null)}>
        {editing ? (
          <PersonForm
            initial={editing}
            onCancel={() => setEditing(null)}
            onSubmit={(values) => {
              updatePerson(editing.id, values);
              setEditing(null);
            }}
          />
        ) : null}
      </Modal>

      <Modal
        open={Boolean(followUpFor)}
        title={`Acompanhamento — ${followUpFor?.name ?? ""}`}
        onClose={() => setFollowUpFor(null)}
      >
        {followUpFor ? (
          <FollowUpForm
            onCancel={() => setFollowUpFor(null)}
            onSubmit={(values) => {
              addFollowUp({ personId: followUpFor.id, ...values });
              setFollowUpFor(null);
            }}
          />
        ) : null}
      </Modal>

      <Modal
        open={Boolean(scheduleFor)}
        title={`Agendar — ${scheduleFor?.name ?? ""}`}
        onClose={() => setScheduleFor(null)}
      >
        {scheduleFor ? (
          <ScheduleForm
            people={db.people}
            personId={scheduleFor.id}
            onCancel={() => setScheduleFor(null)}
            onSubmit={(values) => {
              addSchedule(values);
              setScheduleFor(null);
            }}
          />
        ) : null}
      </Modal>
    </AppShell>
  );
}
