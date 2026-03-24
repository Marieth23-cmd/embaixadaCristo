import Link from "next/link";

export default function QuemSomos() {
  return (
    <section className="bg-white py-10 lg:py-14 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Label topo */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a227] mb-4">
          Quem Somos
        </p>

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-snug">
          Embaixada do Reino de Cristo
        </h2>

        {/* Faixa dourada de destaque */}
        <div className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 rounded-lg px-8 py-6 mb-10 text-left">
          <p className="text-[#0f1f3d] text-base lg:text-lg md:text-lg font-semibold leading-relaxed">
            &quot;Reconciliando as nações com Deus através do amor, da Palavra e do serviço.&quot;
          </p>
        </div>

        {/* Parágrafos */}
        <div className="space-y-5 text-[#444] text-base lg:text-lg leading-relaxed text-left mb-10">
          <p>
            A Embaixada do Reino de Cristo nasceu com uma visão clara: reconciliar as nações
            com Deus. Ao longo dos anos, crescemos como uma comunidade unida, movida pela fé
            e pelo compromisso inabalável com o Evangelho de Jesus Cristo.
         
            Acreditamos que a Igreja existe para servir, amar e proclamar. Por isso, cada
            ministério, cada culto e cada acção de serviço reflecte o coração de Deus para
            as pessoas ao nosso redor — sem excepção.
         
            Seja você quem for, de onde quer que venha — há um lugar para si aqui.
            Venha fazer parte desta família.
            {/* CTA */}
         <Link href="#historia" className=" text-[#c9a227] font-semibold text-lg px-8 py-3.5 rounded transition-colors">
          Conheça a nossa história
        </Link>

          </p>
         
        </div>

        {/* Divisor dourado */}
      

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { num: "10+", label: "Anos de Ministério" },
            { num: "100+", label: "Membros Activos" },
            { num: "20+", label: "Grupos de Célula" },
            { num: "3", label: "Cultos Semanais" },
          ].map(({ num, label }) => (
            <div key={label} className="border border-gray-100 rounded py-5 px-3 text-center">
              <div className="text-2xl font-bold text-[#0f1f3d] mb-1">{num}</div>
              <div className="text-xs text-gray-500 leading-snug">{label}</div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}