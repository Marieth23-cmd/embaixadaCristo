"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const menu = [
    { label: "Início", href: "/" },
    { label: "Dar", href: "/Dar" },
    { label: "Eventos", href: "/Eventos" },
    { label: "Servir", href: "/Servir" },
    { label: "Galeria", href: "/galeria" }
  ];


 const [isopen, setIsOpen] = useState(false);
 const [ismenuopen, setIsMenuOpen] = useState(false);

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
        fixed left-0 right-0 z-20 transition-all duration-300
        ${
        isTransparent ? "bg-transparent" : "bg-white shadow-md"}
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
    {menu.map((item) => (
      <li key={item.label} className="hidden lg:block">
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
              }`}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
