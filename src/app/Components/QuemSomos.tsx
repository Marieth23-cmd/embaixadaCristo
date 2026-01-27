import React from "react";
import Image from "next/image";

export default function Lideranca() {
  return (
    <section className="relative bg-white py-20 md:py-28 px-4 overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Nossa Liderança
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-6 leading-tight">
            Conheça quem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              lidera nossa igreja
            </span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Pastores dedicados ao chamado de Deus, servindo com amor e comprometimento
            para edificar vidas e transformar nossa comunidade.
          </p>
        </div>

        {/* Container principal com flex - Duas divs lado a lado */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
          
          {/* DIV 1: Pastores Seniores - Destaque Principal */}
          <div className="flex-1 lg:flex-[1.2]">
            <div className="group relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100">
              
              {/* Badge de destaque */}
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-sm font-semibold shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Pastores Seniores
                </span>
              </div>

              {/* Conteúdo */}
              <div className="p-8 md:p-10">
                {/* Foto dos líderes */}
                <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative h-[400px] md:h-[500px] w-full">
                    <Image
                      src="/images/logo.jpg"
                      alt="Pastores Seniores"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay gradiente sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Onda decorativa */}
                  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                      className="w-full h-[40px] relative block"
                    >
                      <path
                        d="M0,40 C200,80 400,0 600,60 C800,120 1000,20 1200,60 L1200,120 L0,120 Z"
                        fill="white"
                      />
                    </svg>
                  </div>{/* Informações */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Apostólo Francisco  & Pra. Sonia Franscisco
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg">
                        Pastores Fundadores
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Com mais de 10 anos dedicados ao ministério, Ap. Francisco e Pra. Sónia
                    têm guiado nossa igreja com sabedoria, amor e visão profética. Seu compromisso com a 
                    Palavra de Deus e cuidado pastoral tem transformado milhares de vidas e 
                    estabelecido uma comunidade forte e fundamentada nos princípios do Reino.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">10+</div>
                      <div className="text-xs md:text-sm text-gray-600">Anos de Ministério</div>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">5mil+</div>
                      <div className="text-xs md:text-sm text-gray-600">Vidas Alcançadas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">100+</div>
                      <div className="text-xs md:text-sm text-gray-600">Líderes Formados</div>
                    </div>
                  </div>

                  {/* Botão de contato */}
                  <button className="w-full mt-6 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:scale-[1.02]">
                    <span>Falar com os Pastores</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
                </div>

                

          {/* DIV 2: Equipe Pastoral - Grid de Cards */}
          <div className="flex-1">
            <div className="h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Equipe Pastoral
                </h3>
                <p className="text-gray-600">
                  Líderes comprometidos servindo juntos no cuidado do rebanho
                </p>
              </div>

              {/* Grid de pastores auxiliares */}
              <div className="grid gap-6 flex-1">
                {/* Pastor 1 */}
                <div className="group bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all">
                        <Image
                          src="/images/logo.jpg"
                          alt="Pastor Auxiliar"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        Pr. Veloso
                      </h4>
                      <p className="text-blue-600 font-medium text-sm mb-3">
                        Pastor de Jovens
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Apaixonado por alcançar a nova geração com o Evangelho e formar 
                        jovens comprometidos com Cristo.
                      </p>
                    </div>
                  </div>
                </div>
                

                {/* Pastor 2 */}
                <div className="group bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all">
                        <Image
                          src="/lideres/pastora-auxiliar-1.jpg"
                          alt="Pastora Auxiliar"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>


                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                        Pra.Rosa
                      </h4>
                      <p className="text-purple-600 font-medium text-sm mb-3">
                        Pastora de Mulheres
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Dedicada ao ministério feminino, capacitando mulheres a descobrirem 
                        seu propósito em Deus.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pastor 3 */}
                <div className="group bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all">
                        <Image
                          src="/lideres/pastor-auxiliar-2.jpg"
                          alt="Pastor Auxiliar"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        Pr. José
                      </h4>
                      <p className="text-blue-600 font-medium text-sm mb-3">
                        Pastor de Adoração
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Lidera o ministério de louvor, conduzindo a igreja a uma adoração 
                        verdadeira e profunda.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pastor 4 */}
                 
                <div className="group bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all">
                        <Image
                          src="/lideres/pastora-auxiliar-1.jpg"
                          alt="Pastora Auxiliar"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>


                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                        Evangelista André Dinga
                      </h4>
                      <p className="text-purple-600 font-medium text-sm mb-3">
                        Pescador de Almas
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Dedicado à evangelização, alcançando vidas nas ruas e comunidades
                        com a mensagem transformadora de Cristo.
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}