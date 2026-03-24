export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Vídeo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/novohero.mp4" type="video/mp4" />
      </video>

      {/* Overlay para leitura */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
            Bem-vindo à <br />
            <span className="text-yellow-400">
              Embaixada do Reino de Cristo
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-xl italic">
            Reconciliando as nações com Deus através do amor, da Palavra e do serviço. 
          </p>

         
        </div>
      </div>
    </section>
  );
}
