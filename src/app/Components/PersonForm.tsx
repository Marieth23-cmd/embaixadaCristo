"use client";

import { useState } from "react";
import { Button, Field, Input, Select, Textarea } from "./UI";
import type { Person, PersonType } from "../../lib/types";

export type PersonFormValues = Omit<Person, "id" | "createdAt" | "createdBy">;

const empty: PersonFormValues = {
  name: "",
  contact: "",
  social: "",
  invitedBy: "",
  location: "",
  type: "visitante",
  notes: "",
};

export function PersonForm({
  initial,
  onSubmit,
  onCancel,
  submitLabel = "Guardar",
}: {
  initial?: Person;
  onSubmit: (values: PersonFormValues) => void;
  onCancel: () => void;
  submitLabel?: string;
}) {
  const [values, setValues] = useState<PersonFormValues>(
    initial ? { ...initial } : empty,
  );

  const set = <K extends keyof PersonFormValues>(key: K, value: PersonFormValues[K]) =>
    setValues((v) => ({ ...v, [key]: value }));

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (!values.name.trim()) return;
        onSubmit({ ...values, name: values.name.trim() });
      }}
    >
      <Field label="Nome completo">
        <Input
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="Ex.: Maria Fernandes"
          required
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Contacto">
          <Input
            value={values.contact}
            onChange={(e) => set("contact", e.target.value)}
            placeholder="Telefone"
          />
        </Field>
        <Field label="Rede social">
          <Input
            value={values.social}
            onChange={(e) => set("social", e.target.value)}
            placeholder="Instagram, Facebook..."
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Quem convidou">
          <Input value={values.invitedBy} onChange={(e) => set("invitedBy", e.target.value)} />
        </Field>
        <Field label="Tipo">
          <Select
            value={values.type}
            onChange={(e) => set("type", e.target.value as PersonType)}
          >
            <option value="visitante">Visitante</option>
            <option value="membro">Pretende ser membro</option>
          </Select>
        </Field>
      </div>

      <Field label="Localização detalhada">
        <Textarea
          value={values.location}
          onChange={(e) => set("location", e.target.value)}
          placeholder="Bairro, rua, referência"
        />
      </Field>

      <Field label="Observação">
        <Textarea value={values.notes} onChange={(e) => set("notes", e.target.value)} />
      </Field>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">{submitLabel}</Button>
      </div>
    </form>
  );
}
