"use client";

import { useState } from "react";
import Link from "next/link";
import { FiCheck, FiPlus, FiTrash2 } from "react-icons/fi";

import { AppShell } from "../Components/AppShell";
import { Badge, Button, Card, EmptyState } from "../Components/UI";
import { Modal } from "../Components/Modal";
import { ScheduleForm } from "../Components/ScheduleForm";

import {
  addSchedule,
  completeSchedule,
  removeSchedule,
  useDatabase,
} from "@/lib/store";

import {
  formatDate,
  todayKey,
  weekRange,
} from "@/lib/helpers";

import {
  SCHEDULE_TYPE_LABEL,
  type Schedule,
} from "@/lib/types";

export default function Agenda() {
  const db = useDatabase();

  const [open, setOpen] = useState(false);

  const today = todayKey();

  const { start, end } = weekRange();

  const pending = db.schedules
    .filter((s) => !s.done)
    .sort((a, b) =>
      `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`)
    );

  const groups = [
    {
      title: "Hoje",
      items: pending.filter((s) => s.date === today),
    },
    {
      title: "Esta semana",
      items: pending.filter(
        (s) =>
          s.date > today &&
          s.date >= start &&
          s.date <= end
      ),
    },
    {
      title: "Próximos acompanhamentos",
      items: pending.filter((s) => s.date > end),
    },
    {
      title: "Em atraso",
      items: pending.filter((s) => s.date < today),
    },
  ];

  const nameOf = (id: string) =>
    db.people.find((p) => p.id === id)?.name ??
    "Pessoa removida";

  return (
    <AppShell
      title="Agenda"
      description="Planeie visitas e ligações de acompanhamento."
      actions={
        <Button
          onClick={() => setOpen(true)}
          disabled={db.people.length === 0}
        >
          <FiPlus className="h-4 w-4" />
          Novo agendamento
        </Button>
      }
    >
      {pending.length === 0 ? (
        <EmptyState
          title="Sem agendamentos pendentes"
          description="Agende uma visita ou ligação para acompanhar alguém."
        />
      ) : (
        <div className="space-y-6">
          {groups
            .filter((g) => g.items.length > 0)
            .map((group) => (
              <section key={group.title}>
                <h2 className="mb-3 text-sm font-semibold text-slate-900">
                  {group.title}

                  <span className="ml-2 text-xs font-normal text-slate-400">
                    {group.items.length}
                  </span>
                </h2>

                <div className="space-y-3">
                  {group.items.map((schedule) => (
                    <ScheduleRow
                      key={schedule.id}
                      schedule={schedule}
                      personName={nameOf(schedule.personId)}
                    />
                  ))}
                </div>
              </section>
            ))}
        </div>
      )}

      <Modal
        open={open}
        title="Novo agendamento"
        onClose={() => setOpen(false)}
      >
        <ScheduleForm
          people={db.people}
          onCancel={() => setOpen(false)}
          onSubmit={(values) => {
            addSchedule(values);
            setOpen(false);
          }}
        />
      </Modal>
    </AppShell>
  );
}

function ScheduleRow({
  schedule,
  personName,
}: {
  schedule: Schedule;
  personName: string;
}) {
  return (
    <Card className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/Pessoas/${schedule.personId}`}
            className="font-medium text-slate-900 hover:text-blue-700"
          >
            {personName}
          </Link>

          <Badge tone={schedule.type === "visita" ? "blue" : "gold"}>
            {SCHEDULE_TYPE_LABEL[schedule.type]}
          </Badge>
        </div>

        <p className="mt-1 text-sm text-slate-500">
          {formatDate(schedule.date)}
          {schedule.time ? ` às ${schedule.time}` : ""}
          {" · "}
          Responsável: {schedule.createdBy}
        </p>

        {schedule.notes && (
          <p className="mt-1 text-sm text-slate-600">
            {schedule.notes}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => removeSchedule(schedule.id)}
        >
          <FiTrash2 className="h-4 w-4" />
          Remover
        </Button>

        <Button
          onClick={() => completeSchedule(schedule.id)}
        >
          <FiCheck className="h-4 w-4" />
          Marcar como realizado
        </Button>
      </div>
    </Card>
  );
}
