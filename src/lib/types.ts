export type PersonType = "visitante" | "membro";

export type FollowUpType = "visita" | "ligacao" | "conversa" | "culto" | "outro";

export type ScheduleType = "visita" | "ligacao" | "outro";

export interface Person {
  id: string;
  name: string;
  contact: string;
  social: string;
  invitedBy: string;
  location: string;
  type: PersonType;
  notes: string;
  createdAt: string;
  createdBy: string;
}

export interface FollowUp {
  id: string;
  personId: string;
  type: FollowUpType;
  notes: string;
  createdAt: string;
  createdBy: string;
}

export interface Schedule {
  id: string;
  personId: string;
  type: ScheduleType;
  date: string;
  time: string;
  notes: string;
  done: boolean;
  createdAt: string;
  createdBy: string;
}

export interface Database {
  people: Person[];
  followUps: FollowUp[];
  schedules: Schedule[];
}

export const PERSON_TYPE_LABEL: Record<PersonType, string> = {
  visitante: "Visitante",
  membro: "Pretende ser membro",
};

export const FOLLOWUP_TYPE_LABEL: Record<FollowUpType, string> = {
  visita: "Visita",
  ligacao: "Ligação",
  conversa: "Conversa",
  culto: "Culto",
  outro: "Outro",
};

export const SCHEDULE_TYPE_LABEL: Record<ScheduleType, string> = {
  visita: "Visita",
  ligacao: "Ligação",
  outro: "Outro acompanhamento",
};