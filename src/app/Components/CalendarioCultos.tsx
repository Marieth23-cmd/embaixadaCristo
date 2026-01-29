"use client";

import React, { useState } from "react";

type Evento = {
  nome: string;
  hora: string;
  cor: string;
  icone: string;
};

export default function CalendarioCultos() {
  const [mesSelecionado, setMesSelecionado] = useState(new Date().getMonth());
  const [anoSelecionado, setAnoSelecionado] = useState(new Date().getFullYear());

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  // Eventos fixos da igreja
  const eventosFixos : { [key: number]: Array<{ nome: string; hora: string; cor: string; icone: string }> } = {
    0: [ // Domingo
      { nome: "Culto Dominical", hora: "8:00 - 10:30", cor: "blue", icone: "🙏" }
    ],
    1: [ // Segunda
      { nome: "Culto de Oração", hora: "18:00 - 19:30", cor: "purple", icone: "🕯️" }
    ],
    2: [ // Terça
      { nome: "Culto de Ensino", hora: "18:00 - 19:30", cor: "blue", icone: "📖" }
    ],
    5: [ // Sexta
      { nome: "Culto da Vitória", hora: "18:00 - 19:30", cor: "gold", icone: "✨" }
    ],
    6: [ // Sábado
      { nome: "Evangelização", hora: "Manhã", cor: "green", icone: "📢" },
      { nome: "Encontro de Senhoras", hora: "Manhã", cor: "pink", icone: "👩‍👩‍👧" }
    ]
  };

  // Função para obter dias do mês
  const getDiasDoMes = (mes: number, ano: number): Array<{ numero: number; diaSemana: number; eventos: Evento[] }> => {
    const primeiroDia = new Date(ano, mes, 1).getDay();
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();
    
    const dias:({ numero: number; diaSemana: number; eventos: Evento[] } | null)[] = [];
    
    // Preencher espaços vazios antes do primeiro dia
    for (let i = 0; i < primeiroDia; i++) {
      dias.push(null);
    }
    
    // Preencher dias do mês
    for (let dia = 1; dia <= ultimoDia; dia++) {
      const diaSemana = new Date(ano, mes, dia).getDay();
      dias.push({
        numero: dia,
        diaSemana,
        eventos: eventosFixos[diaSemana] || []
      });
    }
    
    return dias.filter(dia => dia !== null) as Array<{ numero: number; diaSemana: number; eventos: Evento[] }>;
  };

  const dias = getDiasDoMes(mesSelecionado, anoSelecionado);

  const proximoMes = () => {
    if (mesSelecionado === 11) {
      setMesSelecionado(0);
      setAnoSelecionado(anoSelecionado + 1);
    } else {
      setMesSelecionado(mesSelecionado + 1);
    }
  };

  const mesAnterior = () => {
    if (mesSelecionado === 0) {
      setMesSelecionado(11);
      setAnoSelecionado(anoSelecionado - 1);
    } else {
      setMesSelecionado(mesSelecionado - 1);
    }
  };

  const hoje = new Date();
  const ehHoje = (dia: number) => {
    return dia === hoje.getDate() && 
           mesSelecionado === hoje.getMonth() && 
           anoSelecionado === hoje.getFullYear();
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white py-20 md:py-28 px-4 overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-50 to-blue-50 text-blue-600 rounded-full text-sm font-medium border border-yellow-200/50">
              <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Agenda da Igreja
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Calendário de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-blue-600">
              Cultos e Eventos
            </span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Confira nossa programação semanal e participe dos nossos encontros. 
            Estamos sempre de portas abertas para recebê-lo!
          </p>
        </div>

        {/* Container do calendário */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          
          {/* Cabeçalho do calendário - Navegação */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 px-6 md:px-8 py-6">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <button
                onClick={mesAnterior}
                className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 group"
                aria-label="Mês anterior"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {meses[mesSelecionado]} {anoSelecionado}
                </h3>
                <p className="text-blue-100 text-sm">
                  Clique nos dias para ver os horários
                </p>
              </div>

              <button
                onClick={proximoMes}
                className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 group"
                aria-label="Próximo mês"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Grid do calendário */}
          <div className="p-4 md:p-8">
            {/* Dias da semana */}
            <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
              {diasSemana.map((dia, index) => (
                <div
                  key={index}
                  className="text-center py-3 font-bold text-gray-700 text-sm md:text-base"
                >
                  {dia}
                </div>
              ))}
            </div>

            {/* Dias do mês */}
            <div className="grid grid-cols-7 gap-2 md:gap-4">
              {dias.map((dia, index) => (
                <div
                  key={index}
                  className={`
                    min-h-[100px] md:min-h-[130px] p-2 md:p-3 rounded-2xl transition-all duration-300
                    ${dia === null ? 'bg-transparent' : 'bg-gradient-to-br from-gray-50 to-white border-2'}
                    ${dia && dia.eventos.length > 0 ? 'border-yellow-300 hover:border-yellow-400 hover:shadow-xl cursor-pointer' : 'border-gray-100'}
                    ${dia && ehHoje(dia.numero) ? 'ring-4 ring-blue-400 ring-offset-2 border-blue-400' : ''}
                  `}
                >
                  {dia && (
                    <>
                      {/* Número do dia */}
                      <div className={`
                        text-sm md:text-base font-bold mb-2 flex items-center justify-between
                        ${ehHoje(dia.numero) ? 'text-blue-600' : dia.eventos.length > 0 ? 'text-gray-900' : 'text-gray-400'}
                      `}>
                        <span>{dia.numero}</span>
                        {ehHoje(dia.numero) && (
                          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                        )}
                      </div>

                      {/* Eventos do dia */}
                      {dia.eventos.length > 0 && (
                        <div className="space-y-1">
                          {dia.eventos.map((evento, idx) => (
                            <div
                              key={idx}
                              className={`
                                group/evento relative px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300
                                ${evento.cor === 'blue' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : ''}
                                ${evento.cor === 'gold' ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 hover:from-yellow-200 hover:to-yellow-300' : ''}
                                ${evento.cor === 'purple' ? 'bg-yellow-100 text-blue-700 hover:bg-purple-200' : ''}
                                ${evento.cor === 'green' ? 'bg-blue-100 text-blue-700 hover:bg-green-200' : ''}
                                ${evento.cor === 'pink' ? 'bg-yellow-100 text-yellow-700 hover:bg-pink-200' : ''}
                              `}
                            >
                              <div className="flex items-center gap-1">
                                <span className="text-sm">{evento.icone}</span>
                                <span className="hidden md:inline truncate">{evento.nome}</span>
                              </div>
                              
                              {/* Tooltip com detalhes */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/evento:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-xl">
                                <div className="font-semibold">{evento.nome}</div>
                                <div className="text-gray-300">{evento.hora}</div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legenda de eventos */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            Programação Semanal
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Domingo */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                
                <div>
                  <h4 className="font-bold text-blue-900">Culto Dominical</h4>
                  <p className="text-sm text-blue-700">Domingos</p>
                </div>
              </div>
              <p className="text-blue-800 font-semibold">8:00 - 10:30</p>
            </div>

            {/* Segunda */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
               
                <div>
                  <h4 className="font-bold text-blue-900">Culto de Oração</h4>
                  <p className="text-sm text-blue-700">Segundas</p>
                </div>
              </div>
              <p className="text-blue-800 font-semibold">18:00 - 19:30</p>
            </div>

            {/* Terça */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📖</span>
                <div>
                  <h4 className="font-bold text-blue-900">Culto de Ensino</h4>
                  <p className="text-sm text-blue-700">Terças</p>
                </div>
              </div>
              <p className="text-blue-800 font-semibold">18:00 - 19:30</p>
            </div>

            {/* Sexta */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-5 border-2 border-yellow-300">
              <div className="flex items-center gap-3 mb-3">
               
                <div>
                  <h4 className="font-bold text-yellow-900">Culto da Vitória</h4>
                  <p className="text-sm text-yellow-700">Sextas</p>
                </div>
              </div>
              <p className="text-yellow-800 font-semibold">18:00 - 19:30</p>
            </div>

            {/* Sábado - Evangelização */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                
                <div>
                  <h4 className="font-bold text-blue-900">Evangelização</h4>
                  <p className="text-sm text-blue-500">Sábados</p>
                </div>
              </div>
              <p className="text-blue-800 font-semibold">Período da Manhã</p>
            </div>

            {/* Sábado - Senhoras */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl p-5 border-2 border-yellow-200">
              <div className="flex items-center gap-3 mb-3">
          
                <div>
                  <h4 className="font-bold text-yellow-900">Encontro de Senhoras</h4>
                  <p className="text-sm text-yellow-700">Sábados</p>
                </div>
              </div>
              <p className="text-yellow-800 font-semibold">Período da Tarde</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}