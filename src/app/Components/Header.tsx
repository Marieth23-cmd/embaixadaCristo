"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80); // altura do hero
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed left-0 right-0 z-20 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-[1100px] mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <FaBars
            size={22}
            className={`cursor-pointer transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          />

          <Image src="/images/logo.jpg" alt="Logo" width={50} height={30} />

          <div className={`${scrolled ? "text-gray-900" : "text-white"}`}>
            <h1 className="text-lg font-semibold">Embaixada</h1>
            <p className="text-sm opacity-90">do Reino de Cristo</p>
          </div>
        </div>

        {/* Navegação */}
        <nav>
          <ul className="flex gap-6 items-center">
            {["Início", "Sobre", "Dar", "Eventos", "Servir"].map((item) => (
              <li
                key={item}
                className={`
                  hidden lg:block cursor-pointer transition-colors
                  ${scrolled
                    ? "text-gray-800 hover:text-blue-600"
                    : "text-white hover:text-blue-300"}
                `}
              >
                {item}
              </li>
            ))}

            <IoPersonCircleOutline
              size={24}
              className={`cursor-pointer transition-colors ${
                scrolled ? "text-gray-800 hover:text-blue-600" : "text-white"
              }`}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
