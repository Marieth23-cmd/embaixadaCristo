import type { ReactNode, SelectHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import type { IconType } from "react-icons";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  icon: Icon,
  accent = "blue",
}: {
  label: string;
  value: number | string;
  icon?: IconType;
  accent?: "blue" | "gold" | "slate";
}) {
  const accentClass =
    accent === "gold"
      ? "bg-yellow-50 text-yellow-700"
      : accent === "slate"
        ? "bg-slate-100 text-slate-600"
        : "bg-blue-50 text-blue-700";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{value}</p>
        </div>
        {Icon ? (
          <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${accentClass}`}>
            <Icon className="h-4 w-4" />
          </span>
        ) : null}
      </div>
    </div>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {hint ? <span className="mt-1 block text-xs text-slate-400">{hint}</span> : null}
    </label>
  );
}

const control =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${control} ${props.className ?? ""}`} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${control} ${props.className ?? ""}`} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={3} {...props} className={`${control} ${props.className ?? ""}`} />;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: InputHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "gold";
}) {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    gold: "bg-yellow-700 text-white hover:bg-yellow-800",
    outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
    ghost: "text-slate-600 hover:bg-slate-100",
  }[variant];

  return (
    <button
      {...(props as object)}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 ${styles} ${className}`}
    />
  );
}

export function Badge({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "gold" | "slate" | "green";
}) {
  const tones = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    gold: "bg-yellow-50 text-yellow-700 border-yellow-200",
    slate: "bg-slate-50 text-slate-600 border-slate-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  }[tone];

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones}`}>
      {children}
    </span>
  );
}

export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-200 bg-white p-10 text-center">
      <p className="text-sm font-medium text-slate-700">{title}</p>
      {description ? <p className="mt-1 text-sm text-slate-400">{description}</p> : null}
    </div>
  );
}