import Image from "next/image";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Faixa dourada superior */}
      <div className="h-1 w-full bg-[#c9a227]" />

      {/* Corpo principal */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Coluna 1 — Logo + Missão */}
        <div className="space-y-5">
          <div className="relative w-20 h-20">
            <Image
              src="/images/logo.jpg"
              alt="Logótipo Embaixada do Reino de Cristo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Embaixada do Reino de Cristo</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Reconciliando as nações com Deus através do amor, da Palavra e do serviço. Venha fazer parte dessa família.
            </p>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-[#c9a227] flex items-center justify-center
                         text-white/70 hover:bg-[#c9a227] hover:text-black transition-all duration-200"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#c9a227] flex items-center justify-center
                         text-white/70 hover:bg-[#c9a227] hover:text-black transition-all duration-200"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://tiktok.com"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full border border-[#c9a227] flex items-center justify-center
                         text-white/70 hover:bg-[#c9a227] hover:text-black transition-all duration-200"
            >
              <FaTiktok size={16} />
            </a>
          </div>
        </div>

        {/* Coluna 2 — Horários */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c9a227] mb-6">
            Programação Semanal
          </h4>
          <div className="space-y-4">
            <div className="border-l-2 border-[#c9a227] pl-4 py-2">
              <p className="text-white font-semibold text-sm">Domingo</p>
              <p className="text-gray-400 text-xs">08:00 - 10:30</p>
              <p className="text-gray-500 text-xs italic">Culto Dominical</p>
            </div>
            <div className="border-l-2 border-[#c9a227] pl-4 py-2">
              <p className="text-white font-semibold text-sm">Segunda a Sexta</p>
              <p className="text-gray-400 text-xs">18:00 - 19:30</p>
              <p className="text-gray-500 text-xs italic">Cultos e Atividades</p>
            </div>
            <div className="border-l-2 border-[#c9a227] pl-4 py-2">
              <p className="text-white font-semibold text-sm">Sábado</p>
              <p className="text-gray-400 text-xs">Programas especiais</p>
              <p className="text-gray-500 text-xs italic">Evangelização</p>
            </div>
          </div>
        </div>

        {/* Coluna 3 — Contacto */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c9a227] mb-6">
            Contacto & Localização
          </h4>
          <div className="space-y-4 text-sm text-gray-400">
            <div>
              <p className="text-white font-semibold mb-1">Endereço</p>
              <p className="text-xs">Rua das Flores, 123</p>
              <p className="text-xs">Luanda, Angola</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Telefone</p>
              <p className="text-xs">+244 900 000 000</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Email</p>
              <p className="text-xs hover:text-[#c9a227] transition">contato@embaixadareino.ao</p>
            </div>
          </div>
        </div>

      </div>

      {/* Rodapé */}
      <div className="border-t border-gray-800 py-6 px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Embaixada do Reino de Cristo. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>

    </footer>
  );
}