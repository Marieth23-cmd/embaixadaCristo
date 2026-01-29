"use client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import QuemSomos from "./Components/QuemSomos";
import ViverFe from "./Components/ViverFe";
import Hero from "./Components/Hero";
import {FiSun ,FiMoon} from "react-icons/fi";
import { useEffect, useState } from "react";
import MapaIgreja from "./Components/MapaIgreja";
import CalendarioCultos from "./Components/CalendarioCultos";
import MomentosNoCulto from "./Components/MomentosNoCulto";

 
export default function HomePage(){
  const [dark, setDark] = useState(false);

  useEffect(()=>{
    if (dark){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);



    return (
      <div> 
        <button
       onClick={() => setDark(!dark)}
      className="
        fixed
        bottom-5
        right-5
        z-50
        w-12
        h-12
        rounded-full
        flex
        items-center
        justify-center
        bg-blue-700
        text-white
        shadow-lg
        hover:scale-105
        transition
      "
      aria-label="Alternar tema"
    >
      {dark ? <FiSun size={22} /> : <FiMoon size={22} />}
    </button>
        <Header/>
        <div>
        <Hero/>
        <QuemSomos/> 
        <CalendarioCultos/>
        <ViverFe/>
        <MomentosNoCulto/>
       
       
        </div>
         <MapaIgreja/>
        <Footer/>
        

        
        
        
      </div>
    );
 }  