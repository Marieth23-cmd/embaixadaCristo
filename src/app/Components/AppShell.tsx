"use client";
import Image from "next/image";
import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiGrid, FiUsers, FiCalendar, FiBarChart2, FiLogOut } from "react-icons/fi";
import { useCurrentUser } from "@/lib/store";

const NAV = [
  { to: "/dashboard", label: "Dashboard", icon: FiGrid },
  { to: "/Pessoas", label: "Pessoas", icon: FiUsers },
  { to: "/Agenda", label: "Agenda", icon: FiCalendar },
  { to: "/Estatisticas", label: "Estatísticas", icon: FiBarChart2 },
] as const;

export function AppShell({
  title,
  description,
  actions,
  children,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const { name, signOut } = useCurrentUser();
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready && !name) router.replace("/");
  }, [name, ready, router]);

  function handleSignOut() {
    signOut();
    router.replace("/");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/dashboard" className="flex items-center gap-3">
              <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={50}
            height={50}

           />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-base md:text-lg font-semibold text-slate-900">Acompanhamento</span>
              <span className="text-sm text-yellow-600/90">Gestão de visitantes</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-600 sm:inline">{name}</span>
            <button
              onClick={handleSignOut}
              className="  text-red-500 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm  transition-colors hover:bg-slate-50"
            >
              <FiLogOut className="h-4 w-4 text-red-500" />
              Sair
            </button>
          </div>
        </div>

        <nav className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6">
          <ul className="flex gap-1">
            {NAV.map((item) => {
              const active = pathname.startsWith(item.to);
              return (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className={`flex items-center gap-2 border-b-2 px-3 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "border-blue-600 text-blue-700"
                        : "border-transparent text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
            {description ? (
              <p className="mt-1 text-sm text-slate-500">{description}</p>
            ) : null}
          </div>
          {actions}
        </div>
        {children}
      </main>
    </div>
  );
}
