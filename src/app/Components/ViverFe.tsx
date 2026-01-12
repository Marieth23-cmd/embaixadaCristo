import React from 'react';
import { FaMicrophone, FaHandsHelping, FaLaptopCode, FaHeart } from 'react-icons/fa';

export default function ViverFe() {
  const servicos = [
    {
      icon: FaMicrophone,
      titulo: "Louvor & Adoração",
      descricao: "Eleve sua voz em gratidão e conecte-se através da música e da oração."
    },
    {
      icon: FaHandsHelping,
      titulo: "Evangelização & Ação Social",
      descricao: "Leve esperança e amor ao próximo através de ações concretas e testemunho."
    },
    {
      icon: FaLaptopCode,
      titulo: "Profissões & Dons",
      descricao: "Design, saúde, tecnologia, ensino... Use suas habilidades para glorificar a Deus."
    },
    {
      icon: FaHeart,
      titulo: "Apoio & Serviço",
      descricao: "Ofereça seu tempo, escuta e presença para fortalecer a comunidade."
    }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Há muitas formas de servir a Deus
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6">
            Servir a Deus não é só no altar. É usar o dom, a profissão e o coração para glorificá-Lo.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {servicos.map((servico, index) => {
            const IconComponent = servico.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Ícone */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {servico.titulo}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {servico.descricao}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Quero servir
          </button>
        </div>

      </div>
    </section>
  );
}