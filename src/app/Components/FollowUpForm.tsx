"use client";

import { useState } from "react";
import { Button, Field, Select, Textarea } from "./UI";
import { FOLLOWUP_TYPE_LABEL, type FollowUpType } from "../../lib/types";

export function FollowUpForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: (values: { type: FollowUpType; notes: string }) => void;
  onCancel: () => void;
}) {
  const [type, setType] = useState<FollowUpType>("visita");
  const [notes, setNotes] = useState("");

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ type, notes: notes.trim() });
      }}
    >
      <Field label="Tipo de acompanhamento">
        <Select value={type} onChange={(e) => setType(e.target.value as FollowUpType)}>
          {Object.entries(FOLLOWUP_TYPE_LABEL).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Observação" hint="Data, hora e responsável são registados automaticamente.">
        <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} />
      </Field>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">Registar</Button>
      </div>
    </form>
  );
}