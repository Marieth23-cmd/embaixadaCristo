import React, { useRef } from "react";
import Image from "next/image";

export default function ViverFe() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const servicos = [
    {
      titulo: "Louvor & Adoração",
      descricao: "Sirva a Deus através do louvor, da música e da adoração que toca corações.",
      imagem: "/servicos/louvor.jpg",
      icone: "🎵",
    },
    {
      titulo: "Evangelização",
      descricao: "Leve a Palavra, esperança e amor às pessoas dentro e fora da igreja.",
      imagem: "/servicos/evangelizacao.jpg",
      icone: "📖",
    },
    {
      titulo: "Ação Social",
      descricao: "Sirva com compaixão ajudando famílias, crianças e comunidades.",
      imagem: "/servicos/acao-social.jpg",
      icone: "❤️",
    },
    {
      titulo: "Mídia & Tecnologia",
      descricao: "Use dons criativos e tecnológicos para espalhar o Evangelho.",
      imagem: "/servicos/midia.jpg",
      icone: "💻",
    },
    {
      titulo: "Intercessão",
      descricao: "Sirva orando, sustentando espiritualmente a igreja e as famílias.",
      imagem: "/servicos/oracao.jpg",
      icone: "🙏",
    },
    {
      titulo: "Acolhimento",
      descricao: "Receba pessoas com amor, cuidado e atenção desde a chegada.",
      imagem: "/servicos/acolhimento.jpg",
      icone: "🤝",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-white py-20 md:py-28 px-4 overflow-hidden">
      {/* Decoração de fundo sutil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Servir é amar
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Há muitas formas de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              servir a Deus
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Cada dom é uma semente. Quando colocada no Reino, gera frutos eternos.
            Descubra onde seu talento pode fazer a diferença.
          </p>
        </div>

        {/* Container de scroll horizontal */}
        <div className="relative">
          {/* Botão esquerda */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Scroll para esquerda"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards com scroll horizontal */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 px-4 md:px-16 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[380px] snap-center border border-gray-100"
              >
                {/* Imagem com overlay gradiente */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={servico.imagem}
                    alt={servico.titulo}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Ícone flutuante */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {servico.icone}
                  </div>

                  {/* Onda decorativa (Wave) - Separador entre foto e conteúdo */}
                  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                      className="w-full h-[50px] relative block"
                    >
                      <path
                        d="M0,40 C200,80 400,0 600,60 C800,120 1000,20 1200,60 L1200,120 L0,120 Z"
                        fill="white"
                        className="transition-all duration-300"
                      />
                    </svg>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {servico.titulo}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-5">
                    {servico.descricao}
                  </p>
                  
                  {/* Botão de ação individual */}
                  <button className="w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:scale-[1.02]">
                    <span>Quero servir aqui</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Botão direita */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Scroll para direita"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicador de scroll para mobile */}
          <div className="md:hidden text-center mt-4">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Deslize para ver mais
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>
        </div>
      </div>

      {/* CSS para esconder scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}