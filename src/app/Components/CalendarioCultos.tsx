"use client";

import React, { useState, useEffect, useRef } from "react";

const eventos = [
  { nome: "Culto Dominical",       hora: "08:00 – 10:30", diaSemana: "Domingo"  },
  { nome: "Culto de Ensino",       hora: "18:00 – 19:30", diaSemana: "Terça"    },
  { nome: "Culto da Vitória",      hora: "18:00 – 19:30", diaSemana: "Sexta"    },
  { nome: "Evangelização",         hora: "Manhã",         diaSemana: "Sábado"   },
  { nome: "Encontro de Senhoras",  hora: "Manhã",         diaSemana: "Sábado"   },
];

const diaAbrev: Record<string, string> = {
  Domingo: "DOM", Segunda: "SEG", Terça: "TER",
  Quarta: "QUA",  Quinta: "QUI",  Sexta: "SEX", Sábado: "SÁB",
};

export default function CalendarioCultos() {
  const [visible, setVisible] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  /* Intersection Observer — anima ao entrar no viewport */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0c1a35] py-24 px-6 overflow-hidden"
    >
      {/* ── Decoração de fundo: cruzes / pontos de luz ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Brilho central suave */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[600px] rounded-full
                        bg-[#1B3F72]/30 blur-[120px]" />
        {/* Linhas decorativas */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r
                        from-transparent via-[#c9a227]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r
                        from-transparent via-[#c9a227]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Cabeçalho ── */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#c9a227] mb-4">
            Programação Semanal
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
            Calendário de Cultos
          </h2>
          <p className="text-blue-200/70 max-w-xl mx-auto text-base lg:text-lg leading-relaxed">
            Venha com o coração aberto. Cada encontro é uma oportunidade de crescer
            na fé, na comunhão e no amor de Deus.
          </p>

          {/* Divisor dourado */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-[#c9a227]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />
            <div className="h-px w-16 bg-[#c9a227]/40" />
          </div>
        </div>

        {/* ── Lista de eventos ── */}
        <div className="space-y-3">
          {eventos.map((ev, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="transition-all duration-700 cursor-default"
              style={{
                opacity:    visible ? 1 : 0,
                transform:  visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${150 + i * 80}ms`,
              }}
            >
              <div
                className="flex items-center gap-5 px-6 py-5 rounded-lg border transition-all duration-300"
                style={{
                  background:   hoveredIdx === i ? "rgba(27,63,114,0.5)"  : "rgba(255,255,255,0.04)",
                  borderColor:  hoveredIdx === i ? "rgba(201,162,39,0.5)" : "rgba(255,255,255,0.08)",
                }}
              >
                {/* Pílula do dia */}
                <div
                  className="flex-shrink-0 w-14 text-center py-2 rounded-md transition-colors duration-300"
                  style={{
                    background: hoveredIdx === i ? "#c9a227" : "rgba(201,162,39,0.15)",
                  }}
                >
                  <span
                    className="block text-[10px] font-bold tracking-widest transition-colors duration-300"
                    style={{ color: hoveredIdx === i ? "#0c1a35" : "#c9a227" }}
                  >
                    {diaAbrev[ev.diaSemana] ?? ev.diaSemana.substring(0, 3).toUpperCase()}
                  </span>
                </div>

                {/* Nome */}
                <div className="flex-1">
                  <p className="text-white font-semibold text-base">{ev.nome}</p>
                  <p className="text-blue-200/50 text-xs mt-0.5">{ev.diaSemana}</p>
                </div>

                {/* Hora */}
                <div className="text-right">
                  <span
                    className="text-sm font-semibold transition-colors duration-300"
                    style={{ color: hoveredIdx === i ? "#f0d060" : "#c9a227" }}
                  >
                    {ev.hora}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

       

        {/* ── CTA ── */}
        <div
          className="mt-12 text-center transition-all duration-700"
          style={{
            opacity:   visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "850ms",
          }}
        >
          <button className="bg-[#1B3F72] hover:bg-[#c9a227] hover:text-[#0c1a35]
                             text-white font-semibold text-sm px-10 py-3.5 rounded
                             transition-all duration-300 border border-[#1B3F72]
                             hover:border-[#c9a227]">
            Planear a minha visita →
          </button>
        </div>

      </div>
    </section>
  );
}