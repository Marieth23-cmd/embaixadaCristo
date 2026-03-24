"use client";

import React, { useRef , useEffect} from "react";
import Image from "next/image";

const servicos = [
  {
    titulo: "Louvor & Adoração",
    descricao: "Sirva a Deus através do louvor e da música que toca corações.",
    imagem: "/images/exe.jpg",
  },
  {
    titulo: "Evangelização",
    descricao: "Leve a Palavra de esperança e amor às pessoas dentro e fora da igreja.",
    imagem:  "/images/adoracao.jpg",
  },
  {
    titulo: "Ação Social",
    descricao: "Doe tempo e recursos para apoiar famílias e comunidades em necessidade.",
    imagem:  "/images/exe.jpg",
  },
  {
    titulo: "Mídia & Tecnologia",
    descricao: "Use dons criativos e digitais para amplificar a mensagem do Reino.",
    imagem:  "/images/exe.jpg",
  },
  {
    titulo: "Intercessão",
    descricao: "Ore por pessoas e líderes, sustentando espiritualmente a igreja.",
    imagem: "/images/exe.jpg",
  },
  {
    titulo: "Acolhimento",
    descricao: "Receba visitantes com amor, cuidado e atenção desde a chegada.",
    imagem: "/images/exe.jpg",
  },
];

export default function ViverFe() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const amount = trackRef.current.offsetWidth * 0.7;
    trackRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    startX.current = e.touches[0].pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

 // 2. Wheel funcional — adiciona no useEffect
useEffect(() => {
  const el = trackRef.current;
  if (!el) return;

  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    el.scrollBy({ left: (e.deltaY || e.deltaX) * 1.5, behavior: "smooth" });
  };

  el.addEventListener("wheel", onWheel, { passive: false });
  return () => el.removeEventListener("wheel", onWheel);
}, []);

  return (
    <section className="py-10 lg:py-14 overflow-hidden max-w-7xl mx-auto">

      {/* Cabeçalho */}
      <div className="px-6 mb-10 flex items-end justify-between">
        <div>
         
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-snug">
            Formas de Servir
          </h2>
          <p className="mt-3 text-gray-600 max-w-lg text-base lg:text-lg leading-relaxed">
            Cada ministério é um chamado. Descubra onde Deus quer usar os seus dons.
          </p>
        </div>

        {/* Botões de navegação — desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="w-11 h-11 rounded-full border border-white/15 text-white/60
                       hover:border-[#c9a227] hover:text-[#c9a227] transition-all duration-200
                       flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="w-11 h-11 rounded-full border border-white/15 text-white/60
                       hover:border-[#c9a227] hover:text-[#c9a227] transition-all duration-200
                       flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      

      {/* Track do carrossel */}
      <div
        ref={trackRef}
       
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="cursor-grab active:cursor-grabbing flex gap-5 overflow-x-auto scroll-smooth px-6 
                   snap-x snap-mandatory overflow-y-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {servicos.map((servico, i) => (
          <article
            key={i}
            className="group relative flex-shrink-0 snap-start rounded-lg overflow-hidden cursor-pointer
                       min-w-[280px] max-w-[430px] w-[78vw] sm:w-[45vw] md:w-[32vw] lg:w-[26vw] h-[480px]"
          >
            {/* Imagem */}
            <Image
              src={servico.imagem}
              alt={servico.titulo}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay permanente — escurece base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Borda dourada no hover */}
            <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-300" />

            {/* Conteúdo — sobe no hover */}
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2
                            group-hover:translate-y-0 transition-transform duration-300">

              {/* Linha dourada decorativa */}
              <div className="w-8 h-0.5 bg-[#c9a227] mb-3 rounded
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-white font-bold text-xl leading-tight mb-2">
                {servico.titulo}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed
                            max-h-0 overflow-hidden opacity-0
                            group-hover:max-h-20 group-hover:opacity-100
                            transition-all duration-500">
                {servico.descricao}
              </p>

              <a
                href="/Servir"
                className="inline-block mt-4 px-4 py-2 rounded-md bg-white bg-opacity-90 text-sm font-semibold text-gray-900 hover:bg-opacity-100 transition"
              >
                Quero servir aqui
              </a>
            </div>
          </article>
        ))}

        {/* Espaço final no carrossel */}
        <div className="flex-shrink-0 w-6 md:w-12" />
      </div>

      {/* Botões mobile */}
      <div className="flex justify-center gap-4 mt-8 ">
        <button
          onClick={() => scroll("left")}
          className="w-11 h-11 rounded-full border border-gray-400 text-gray-500
             hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200
             items-center justify-center hidden md:block "
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-11 h-11 rounded-full border border-gray-400 text-gray-500
                     hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200
                     items-center justify-center hidden md:block"
        >
          →
        </button>
      </div>

    </section>
  );
}