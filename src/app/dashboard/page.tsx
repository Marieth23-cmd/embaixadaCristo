"use client";

import Link from "next/link";
import { FiCalendar, FiCheckSquare, FiPlus, FiUsers } from "react-icons/fi";

import { AppShell } from "../Components/AppShell";
import { Badge, Button, Card, EmptyState, StatCard } from "../Components/UI";
import { formatDate, hasFollowUp, todayKey } from "@/lib/helpers";
import { useDatabase } from "@/lib/store";

export default function DashboardPage() {
  const db = useDatabase();
  const today = todayKey();
  const pendingToday = db.schedules.filter((item) => !item.done && item.date === today);
  const pending = db.schedules.filter((item) => !item.done).length;
  const accompanied = db.people.filter((person) => hasFollowUp(db, person.id)).length;

  return (
    <AppShell
      title="Dashboard"
      description="Resumo do acompanhamento de visitantes e futuros membros."
      actions={<Link href="/Pessoas"><Button><FiPlus className="h-4 w-4" />Novo cadastro</Button></Link>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Pessoas registadas" value={db.people.length} icon={FiUsers} />
        <StatCard label="Acompanhadas" value={accompanied} icon={FiCheckSquare} />
        <StatCard label="Pendentes" value={pending} icon={FiCalendar} accent="gold" />
        <StatCard label="Agendadas para hoje" value={pendingToday.length} icon={FiCalendar} accent="slate" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-semibold text-slate-900">Agendamentos de hoje</h2>
              <p className="mt-1 text-sm text-slate-500">Acompanhamentos previstos para {formatDate(today)}.</p>
            </div>
            <Link href="/Agenda" className="text-sm font-medium text-blue-700 hover:text-blue-800">Ver agenda</Link>
          </div>
          {pendingToday.length === 0 ? (
            <EmptyState title="Sem agendamentos para hoje" description="Crie um agendamento a partir da agenda ou da lista de pessoas." />
          ) : (
            <div className="space-y-3">
              {pendingToday.map((item) => {
                const person = db.people.find((entry) => entry.id === item.personId);
                return (
                  <div key={item.id} className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 p-3">
                    <div><p className="font-medium text-slate-900">{person?.name ?? "Pessoa removida"}</p><p className="text-sm text-slate-500">{item.time || "Sem hora definida"}</p></div>
                    <Badge tone={item.type === "visita" ? "blue" : "gold"}>{item.type === "visita" ? "Visita" : item.type === "ligacao" ? "Ligação" : "Outro"}</Badge>
                  </div>
                );
              })}
            </div>
          )}
        </Card>

        <Card>
          <h2 className="font-semibold text-slate-900">Ações rápidas</h2>
          <p className="mt-1 text-sm text-slate-500">Continue o trabalho de acompanhamento.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/Pessoas"><Button variant="outline" className="w-full"><FiUsers className="h-4 w-4" />Gerir pessoas</Button></Link>
            <Link href="/Agenda"><Button variant="outline" className="w-full"><FiCalendar className="h-4 w-4" />Abrir agenda</Button></Link>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
