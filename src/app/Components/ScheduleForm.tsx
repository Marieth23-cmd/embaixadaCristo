"use client";

import { useState } from "react";
import { Button, Field, Input, Select, Textarea } from "./UI";
import { SCHEDULE_TYPE_LABEL, type Person, type ScheduleType } from "@/lib/types";
import { todayKey } from "@/lib/helpers";

export function ScheduleForm({
  people,
  personId,
  onSubmit,
  onCancel,
}: {
  people: Person[];
  personId?: string;
  onSubmit: (values: {
    personId: string;
    type: ScheduleType;
    date: string;
    time: string;
    notes: string;
  }) => void;
  onCancel: () => void;
}) {
  const [person, setPerson] = useState(personId ?? people[0]?.id ?? "");
  const [type, setType] = useState<ScheduleType>("visita");
  const [date, setDate] = useState(todayKey());
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (!person) return;
        onSubmit({ personId: person, type, date, time, notes: notes.trim() });
      }}
    >
      <Field label="Pessoa">
        <Select
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          disabled={Boolean(personId)}
        >
          {people.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Tipo">
        <Select value={type} onChange={(e) => setType(e.target.value as ScheduleType)}>
          {Object.entries(SCHEDULE_TYPE_LABEL).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Data">
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </Field>
        <Field label="Hora (opcional)">
          <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </Field>
      </div>

      <Field label="Observação">
        <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </Field>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">Agendar</Button>
      </div>
    </form>
  );
}