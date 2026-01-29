import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function DarPage() {
    return (
        <div>
            <Header/>
            <section className="bg-white py-20 px-4">   
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Faça uma Doação</h2>
                    <p className="text-lg mb-6">        
                        Sua contribuição faz a diferença! Ao doar para a Embaixada do Reino de Cristo, você apoia nossos projetos sociais, eventos comunitários e iniciativas de fé que impactam vidas. Cada doação, grande ou pequena, ajuda-nos a expandir nosso alcance e fortalecer nossa missão. Junte-se a nós nessa jornada de transformação e amor ao próximo.
                    </p>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Detalhes para Doação</h3>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            <li><strong>Banco:</strong> Banco Exemplo</li>
                            <li><strong>Agência:</strong> 1234</li>
                            <li><strong>Conta Corrente:</strong> 56789-0</li>
                            <li><strong>PIX:</strong>   
                                <div className="mt-1">
                                    <p>email:   
                                        <span className="font-mono break-all">  
                                        exemplo@embraix.com.br  
                                        </span>
                                    </p>
                                    <p>ou CPF:  
                                        <span className="font-mono break-all">  
                                        123.456.789-00  
                                        </span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>  
            </section>
            <Footer/>
        </div>
    );
}