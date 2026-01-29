"use client";

import React, { useState } from "react";
import Image from "next/image";

// Tipos TypeScript
type Video = {
  id: string;
  titulo: string;
  categoria: "Culto Dominical" | "Evangelização" | "Encontro de Senhoras" | "Culto Especial" | "Louvor";
  data: string;
  thumbnail: string;
  videoUrl: string; // URL do vídeo (pode ser local ou de plataforma)
  descricao?: string;
};

type Categoria = "Todos" | "Culto Dominical" | "Evangelização" | "Encontro de Senhoras" | "Culto Especial" | "Louvor";

export default function MomentosCultos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria>("Todos");
  const [videoSelecionado, setVideoSelecionado] = useState<Video | null>(null);

  // Lista de vídeos (substitua com seus dados reais)
  const videos: Video[] = [
    {
      id: "1",
      titulo: "Culto Dominical - A Fé que Move Montanhas",
      categoria: "Culto Dominical",
      data: "15 de Janeiro, 2025",
      thumbnail: "/thumbnails/culto-domingo-1.jpg",
      videoUrl: "/videos/culto-1.mp4",
      descricao: "Mensagem poderosa sobre fé e milagres"
    },
    {
      id: "2",
      titulo: "Momento de Louvor - Deus Está Aqui",
      categoria: "Louvor",
      data: "12 de Janeiro, 2025",
      thumbnail: "/thumbnails/louvor-1.jpg",
      videoUrl: "/videos/louvor-1.mp4",
      descricao: "Adoração intensa com a presença de Deus"
    },
    {
      id: "3",
      titulo: "Evangelização na Comunidade",
      categoria: "Evangelização",
      data: "10 de Janeiro, 2025",
      thumbnail: "/thumbnails/evangelizacao-1.jpg",
      videoUrl: "/videos/evangelizacao-1.mp4",
      descricao: "Levando esperança às ruas"
    },
    {
      id: "4",
      titulo: "Encontro de Senhoras - Mulheres de Fé",
      categoria: "Encontro de Senhoras",
      data: "8 de Janeiro, 2025",
      thumbnail: "/thumbnails/senhoras-1.jpg",
      videoUrl: "/videos/senhoras-1.mp4",
      descricao: "Edificação e comunhão entre irmãs"
    },
    {
      id: "5",
      titulo: "Culto da Vitória - Testemunhos Poderosos",
      categoria: "Culto Especial",
      data: "5 de Janeiro, 2025",
      thumbnail: "/thumbnails/vitoria-1.jpg",
      videoUrl: "/videos/vitoria-1.mp4",
      descricao: "Testemunhos que glorificam o nome do Senhor"
    },
    {
      id: "6",
      titulo: "Culto de Ano Novo - Novo Tempo",
      categoria: "Culto Especial",
      data: "1 de Janeiro, 2025",
      thumbnail: "/thumbnails/ano-novo.jpg",
      videoUrl: "/videos/ano-novo.mp4",
      descricao: "Começando o ano com propósito e fé"
    }
  ];

  const categorias: Categoria[] = ["Todos", "Culto Dominical", "Louvor", "Evangelização", "Encontro de Senhoras", "Culto Especial"];

  const videosFiltrados = categoriaSelecionada === "Todos" 
    ? videos 
    : videos.filter(v => v.categoria === categoriaSelecionada);

  const abrirModal = (video: Video) => {
    setVideoSelecionado(video);
    document.body.style.overflow = 'hidden';
  };

  const fecharModal = () => {
    setVideoSelecionado(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50/20 to-white py-20 md:py-28 px-4 overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-50 to-blue-50 border border-yellow-200/50 text-blue-700 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Momentos dos Cultos
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Reviva os{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-blue-600">
              Melhores Momentos
            </span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Confira vídeos e fotos dos nossos encontros e celebrações semanais.
            Sinta-se convidado a fazer parte da nossa família!
          </p>
        </div>

        {/* Filtro de categorias */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaSelecionada(categoria)}
              className={`
                px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                ${categoriaSelecionada === categoria
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200'
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600'
                }
              `}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de vídeos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosFiltrados.map((video) => (
            <div
              key={video.id}
              onClick={() => abrirModal(video)}
              className="group cursor-pointer"
            >
              {/* Card do vídeo */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4 aspect-video border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Thumbnail */}
                <Image
                  src={video.thumbnail}
                  alt={video.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent group-hover:from-blue-900/80 transition-all duration-300"></div>

                {/* Botão play com efeito dourado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-yellow-500/50">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Badge de categoria com cores */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-700 shadow-md">
                    {video.categoria}
                  </span>
                </div>

                {/* Data com fundo azul */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1.5 bg-blue-600/90 backdrop-blur-sm rounded-full text-xs font-medium text-white shadow-md">
                    {video.data}
                  </span>
                </div>
              </div>

              {/* Informações do vídeo */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {video.titulo}
                </h3>
                {video.descricao && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {video.descricao}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final - Convite para visita presencial */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Decoração de fundo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Venha Viver Esses Momentos Pessoalmente
              </h3>
              <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Não há nada como estar presente e sentir a presença de Deus conosco.
                Você é mais que bem-vindo para participar dos nossos cultos!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#localizacao"
                  className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Ver Como Chegar</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <a
                  href="#calendario"
                  className="group px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/50 transition-all duration-300 flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>Ver Horários dos Cultos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Vídeo */}
      {videoSelecionado && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={fecharModal}
        >
          <div 
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar com dourado */}
            <button
              onClick={fecharModal}
              className="absolute -top-12 right-0 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg"
              aria-label="Fechar vídeo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Player de vídeo */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-500/30">
              <video
                controls
                autoPlay
                className="w-full h-full"
                src={videoSelecionado.videoUrl}
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>

            {/* Informações do vídeo */}
            <div className="mt-6 bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-3">{videoSelecionado.titulo}</h3>
              <div className="flex items-center gap-4 text-sm text-blue-200 mb-3">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {videoSelecionado.data}
                </span>
                <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-300 font-medium">
                  {videoSelecionado.categoria}
                </span>
              </div>
              {videoSelecionado.descricao && (
                <p className="text-gray-200">{videoSelecionado.descricao}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}