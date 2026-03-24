"use client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import QuemSomos from "./Components/QuemSomos";
import ViverFe from "./Components/ViverFe";
import Hero from "./Components/Hero";
import MapaIgreja from "./Components/MapaIgreja";
import CalendarioCultos from "./Components/CalendarioCultos";

 
export default function HomePage(){
 

    return (
      <div> 
       
        <Header/>
        <div>
        <Hero/>
        <QuemSomos/> 
        <CalendarioCultos/>
        <ViverFe/>
       
       
       
        </div>
         <MapaIgreja/>
        <Footer/>
        

        
        
        
      </div>
    );
 }  