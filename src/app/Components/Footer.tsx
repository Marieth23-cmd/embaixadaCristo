import { FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="max-w-[1500px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">

        {/* Eventos */}
        <div className="cursor-pointer">
          <h2 className="font-semibold mb-3">Eventos</h2>
          <p>Servir</p>
          <p>Dar</p>
          <p>Conectar</p>
        </div>

        {/* Sou novo */}
        <div className="cursor-pointer">
          <h2 className="font-semibold mb-3">Sou novo por aqui</h2>
          <p>Missão e visão</p>
          <p>Equipe, Apóstolo, Diáconos</p>
          <p>Casamentos</p>
        </div>

        {/* Ministérios */}
        <div className="cursor-pointer">
          <h2 className="font-semibold mb-3">Ministérios</h2>
          <p>Louvor e Adoração</p>
          <p>Evangelização</p>
          <p>Protocolo</p>
          <p>Comunicação e Imagem</p>
        </div>

        {/* Redes sociais */}
        <div className="cursor-pointer">
          <h2 className="font-semibold mb-3">
            Junte-se a nós pessoalmente e nas Redes Sociais
          </h2>

          <div className="flex gap-4 mt-4 text-2xl">
            <FaFacebook className="hover:text-blue-500 transition" />
            <FaTiktok className="hover:text-gray-300 transition" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Embaixada do Reino de Cristo.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
