"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const menu = [
    { label: "Dar", href: "/Dar" },
    { label: "Eventos", href: "/Eventos" },
    { label: "Servir", href: "/Servir" },
    { label: "Galeria", href: "/galeria" }
  ];


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80); // altura do hero
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



   const pathname = usePathname();
  const ishome= pathname === "/";
  const isTransparent = ishome && !scrolled;


  return (
    <header
      className={`
       fixed left-0 top-0 w-full z-20 transition-colors
        ${
        isTransparent ? "bg-transparent" : "bg-white shadow-md"}
      `}
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-8 backdrop-blur-md py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="lg:ml-44">
                                                         

          <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.jpg" alt="Logo" width={50} height={30} />
             
              <div className={`${isTransparent ? "text-white" : "text-gray-900"}`}>
                <h1 className="text-lg font-semibold">Embaixada</h1>
                <p className="text-[0.8rem] opacity-90 italic">do Reino de Cristo</p>
              </div>
              </Link>
            </div>
        

        {/* Navegação */}

       
      <nav className="lg:ml-44 hidden lg:block">
          <ul className="flex gap-4 items-center whitespace-nowrap">
            {menu.map((item) => (
              <li key={item.label} >
                <Link
                  href={item.href}
                  className={`
                    cursor-pointer transition-colors
                    ${isTransparent
                      ? "text-white hover:text-blue-300"
                      : "text-gray-800 hover:text-blue-600"}
                  `}
                >
                    {item.label} 
                    
                    
                  </Link>  
                  
                 
                </li>
              
              ))}

              
              <IoPersonCircleOutline
                size={24}
                className={`cursor-pointer transition-colors ${
                  scrolled ? "text-gray-800 hover:text-blue-600" : "text-white"
                }`} />
             
            
            </ul>
        </nav>


          <FaBars size={24} className={`lg:hidden cursor-pointer ${isTransparent ? "text-white" : "text-gray-800"}`} />

     </div>
    </header>
  );
}
