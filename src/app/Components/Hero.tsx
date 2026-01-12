export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
   
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay para leitura */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ✨ Conteúdo */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Bem-vindo à <br />
            <span className="text-yellow-400">
              Embaixada do Reino de Cristo
            </span>
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            Reconciliando as nações com Deus através do amor,
            da Palavra e do serviço.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition">
              Conheça a igreja
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Quero servir
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
