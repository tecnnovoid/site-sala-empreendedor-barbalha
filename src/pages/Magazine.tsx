import { Header } from "../components/Header";
import magazine1 from '../assets/barbalha-business-01-capa.jpg';
import magazine2 from '../assets/barbalha-business-02-capa.jpg';
import magazine3 from '../assets/barbalha-business-03-capa.jpg';
import magazine4 from '../assets/barbalha-business-04-capa.jpg';
import { Footer } from "../components/Footer";

export function Magazine() {
    return (
        <>
            <Header />
            <section id="home" className="pt-32 flex flex-col items-center justify-center lg:items-start lg:justify-start lg:flex lg:flex-row lg:pt-40">
                <div className="w-[90%] flex flex-col justify-center items-center lg:mr-12 lg:w-[46%] lg:pl-20 lg:items-start">
                    <h1 className="text-[#02B1C8] font-bold text-4xl md:text-5xl text-center md:text-left">
                        A revista da sala do empreendedor de Barbalha
                    </h1>
                    <p className="text-black text-lg text-center md:text-xl md:text-left mt-4">
                        A revista da sala do empreendedor de barbalha já conta com 4 edições, encontram-se informações sobre a atuação da sala do empreendedor no nosso municipio, cursos, e capacitações ofertadas aos empreendedores
                        locais .

                    </p>
                    <button className="bg-[#02B1C8] font-semibold text-white text-xl w-32 rounded-xl py-2 flex items-center justify-center mt-4">
                        Increve-se
                    </button>
                </div>

                <div className="mt-8 flex items-center justify-center lg:items-start lg:w-[45%] lg:justify-start lg:mt-0 ">
                    <img src={magazine1} alt="Foto Sala do Empreendedor de Barbalha" className="h-[46%] w-[46%] lg:h-[50%] lg:w-[50%] border-solid border-2 border-sky-500" />
                    <img src={magazine2} alt="Foto Sala do Empreendedor de Barbalha" className="h-[46%] w-[46%] lg:h-[50%] lg:w-[50%] border-solid border-2 border-sky-500" />
                </div>
            </section>
            <section className="lg:pl-20 flex">
                <div>
                    <h3 className="text-[#3A3178] text-4xl font-bold text-center">
                        1º Edição
                    </h3>
                    <img src={magazine1} alt="" className="h-[20rem]" />
                    <div className="flex justify-between">
                        <button className="bg-[#02B1C8] font-semibold text-white text-xl w-32 rounded-xl py-2 flex items-center justify-center mt-4">
                            Ver
                        </button>
                        <button className="bg-[#02B1C8] font-semibold text-white text-xl w-32 rounded-xl py-2 flex items-center justify-center mt-4">
                            Baixar
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

