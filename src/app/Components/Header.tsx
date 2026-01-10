import Image from "next/image";
import { FaBars} from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";


export  default function Header() {
  return (
    <header className=" fixed left-0 right-0 z-20 bg-white shadow-md">
      <div className=" max-w-[1100px] mx-auto px-4 py-3 flex justify-between items-center">
        
        <div className="flex gap-2 ">
            
            <FaBars size={24} className=" cursor-pointer" />
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
            <div>
            <h1 className="text-lg font-semibold">Embaixada</h1>
            <p className="text-sm">do Reino de Cristo</p>
            </div>
            </div>
        <nav>
          <ul className="flex gap-6">
            <li className=" cursor-pointer hover:text-blue-600 hidden lg:block">Inicio</li>
            <li className=" cursor-pointer hover:text-blue-600 hidden lg:block">Sobre</li>
            <li className=" cursor-pointer hover:text-blue-600 hidden lg:block">Dar</li>
            <li className=" cursor-pointer hover:text-blue-600 hidden lg:block">Eventos</li>
            <li className=" cursor-pointer hover:text-blue-600 hidden lg:block">Servir</li>
            <IoPersonCircleOutline size={24} className=" cursor-pointer hover:text-blue-600" />
          </ul>
        </nav>
      </div>
    </header>
  );
}