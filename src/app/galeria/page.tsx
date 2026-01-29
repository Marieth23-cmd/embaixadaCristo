import Footer from "../Components/Footer";
import Header from "../Components/Header";

//Galeria de imagens
export default function GaleriaImagens() {
    const imagens = [
        "/images/galeria1.jpg",
        "/images/galeria2.jpg",
        "/images/galeria3.jpg",
        "/images/galeria4.jpg",
        "/images/galeria5.jpg",
        "/images/galeria6.jpg",
    ];
    return (
        <div>
            <Header/>
             <section className="bg-white py-20 px-4">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Galeria de Imagens</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {imagens.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={src}
                                alt={`Imagem da galeria ${index + 1}`}
                                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer/>
        </div>
       
    );
}