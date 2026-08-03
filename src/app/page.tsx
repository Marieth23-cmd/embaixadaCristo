"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

import { Button, Field, Input } from "./Components/UI";
import { useCurrentUser } from "../lib/store";

export default function HomePage() {
  const { name, signIn } = useCurrentUser();

  const [value, setValue] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (name) {
      router.replace("/dashboard");
    }
  }, [name, router]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userName = value.trim();

    if (!userName) return;

    signIn(userName);

    router.replace("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center  text-base font-semibold ">
           <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={40}
            height={40}

           />
          </span>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Acompanhamento de Membros
          </h1>

          <p className="mt-2 text-sm md:text-base text-slate-700">
            Identifique-se para registar e acompanhar os membros visitantes da igreja.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <Field
            label="O seu nome"
            hint="Exemplo: Irmã Marieth ou Irmão João"
          >
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Escreva o seu nome"
              autoFocus
              required
            />
          </Field>

          <Button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-2"
          >
            Entrar
            <FiArrowRight className="h-4 w-4" />
          </Button>

          <p className="mt-6 text-center text-xs text-slate-500">
          O nome informado será utilizado como responsável pelos cadastros,
          acompanhamentos e agendamentos realizados no sistema. OI
        </p>
        </form>

        
      </div>
    </div>
  );
}
