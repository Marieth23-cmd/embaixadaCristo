"use client";

import { AppShell } from "../Components/AppShell";
import { Card, StatCard } from "../Components/UI";
import { SimpleBarChart } from "../Components/SimpleBarChart";
import { hasFollowUp, lastMonths, monthKey, monthLabel } from "@/lib/helpers";
import { useDatabase } from "@/lib/store";

export default function EstatisticasPage() {
  const db = useDatabase();
  const months = lastMonths(6);
  const accompanied = db.people.filter((person) => hasFollowUp(db, person.id)).length;
  const registrations = months.map((month) => ({
    label: monthLabel(month),
    value: db.people.filter((person) => monthKey(person.createdAt) === month).length,
  }));
  const followUps = months.map((month) => ({
    label: monthLabel(month),
    value: db.followUps.filter((item) => monthKey(item.createdAt) === month).length,
  }));

  return (
    <AppShell title="Estatísticas" description="Indicadores dos últimos seis meses.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Pessoas registadas" value={db.people.length} />
        <StatCard label="Pretendem ser membros" value={db.people.filter((person) => person.type === "membro").length} accent="gold" />
        <StatCard label="Visitas realizadas" value={db.followUps.filter((item) => item.type === "visita").length} />
        <StatCard label="Pessoas acompanhadas" value={accompanied} accent="slate" />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="text-sm font-semibold text-slate-900">Cadastros por mês</h2>
          <p className="mb-4 text-xs text-slate-500">Total de pessoas registadas.</p>
          <SimpleBarChart data={registrations} />
        </Card>
        <Card>
          <h2 className="text-sm font-semibold text-slate-900">Acompanhamentos por mês</h2>
          <p className="mb-4 text-xs text-slate-500">Visitas, ligações e conversas registadas.</p>
          <SimpleBarChart data={followUps} color="#a16207" />
        </Card>
      </div>
    </AppShell>
  );
}
