import { Header } from "../components/Header";
import magazine1 from '../assets/barbalha-business-01-capa.jpg';
import magazine2 from '../assets/barbalha-business-02-capa.jpg';
import magazine3 from '../assets/barbalha-business-03-capa.jpg';
import magazine4 from '../assets/barbalha-business-04-capa.jpg';
import magazinePdf1 from '../assets/pdfs/barbalha-business-1edicaco.pdf';
import magazinePdf2 from '../assets/pdfs/barbalha-business-2edicaco.pdf';
import magazinePdf3 from '../assets/pdfs/barbalha-business-3edicaco.pdf';
import magazinePdf4 from '../assets/pdfs/barbalha-business-4edicaco.pdf';
import { Footer } from "../components/Footer";

export function Magazine() {
    return (
        <>
            <Header />
            <section id="home" className="pt-32 flex flex-col items-center justify-center lg:items-start lg:justify-start lg:flex lg:flex-row lg:pt-44">
                <div className="w-[90%] flex flex-col justify-center items-center lg:mr-12 lg:w-[46%] lg:pl-20 lg:items-start">
                    <h1 className="text-[#02B1C8] font-bold text-4xl md:text-5xl text-center md:text-left">
                        A revista da sala do empreendedor de Barbalha
                    </h1>
                    <p className="text-black text-lg text-center md:text-xl md:text-left mt-4">
                        A revista da sala do empreendedor de barbalha já conta com 4 edições, encontram-se informações sobre a atuação da sala do empreendedor do nosso municipio, cursos, e capacitações ofertadas aos empreendedores
                        locais. Inscreve-se para receber todas as edições de forma online e gratuita!
                    </p>
                    <a href="https://forms.gle/XAv8s6mxzEfTrJCm9" className="bg-[#02B1C8] hover:bg-[#1c9aab] cursor-pointer font-semibold text-white text-xl w-52 rounded-xl py-3 flex items-center justify-center mt-4">
                        Receber revistas
                    </a>
                </div>

                <div className="mt-8 flex items-center justify-center lg:items-start lg:w-[45%] lg:justify-start lg:mt-0 ">
                    <img src={magazine1} alt="Foto da Revista Sala do Empreendedor de Barbalha" className="h-[46%] w-[46%] lg:h-[50%] lg:w-[50%] border-solid border-2 border-sky-500" />
                    <img src={magazine2} alt="Foto da Revista Sala do Empreendedor de Barbalha" className="h-[46%] w-[46%] lg:h-[50%] lg:w-[50%] border-solid border-2 border-sky-500" />
                </div>
            </section>
            <section className="pt-24 flex flex-col items-center">
                <h2 className="text-[#02B1C8] font-bold text-3xl md:text-5xl text-center md:text-left">Baixar revistas</h2>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                    <div className="flex flex-col mt-10 items-center">
                        <h3 className="text-[#3A3178] text-2xl font-bold text-center">
                            1º Edição
                        </h3>
                        <img src={magazine1} alt="" className="h-[60vh] mt-4 lg:h-[24rem]" />
                        <a href={magazinePdf1}
                            download="Barbalha Business 1º edição.pdf" className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-52 rounded-xl py-2 flex items-center justify-center mt-4">
                            Baixar 1º edição
                        </a>
                    </div>
                    <div className="flex flex-col mt-12 items-center">
                        <h3 className="text-[#3A3178] text-2xl font-bold text-center">
                            2º Edição
                        </h3>
                        <img src={magazine2} alt="" className="h-[60vh] mt-4 lg:h-[24rem]" />
                        <a href={magazinePdf2}
                            download="Barbalha Business 2º edição.pdf" className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-52 rounded-xl py-2 flex items-center justify-center mt-4">
                            Baixar 2º edição
                        </a>
                    </div>
                    <div className="flex flex-col mt-12 items-center">
                        <h3 className="text-[#3A3178] text-2xl font-bold text-center">
                            3º Edição
                        </h3>
                        <img src={magazine3} alt="" className="h-[60vh] mt-4 lg:h-[24rem]" />
                        <a href={magazinePdf3}
                            download="Barbalha Business 3º edição.pdf" className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-52 rounded-xl py-2 flex items-center justify-center mt-4">
                            Baixar 3º edição
                        </a>
                    </div>
                    <div className="flex flex-col mt-12 items-center">
                        <h3 className="text-[#3A3178] text-2xl font-bold text-center">
                            4º Edição
                        </h3>
                        <img src={magazine4} alt="" className="h-[60vh] mt-4 lg:h-[24rem]" />
                        <a href={magazinePdf4}
                            download="Barbalha Business 4º edição.pdf" className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-52 rounded-xl py-2 flex items-center justify-center mt-4">
                            Baixar 4º edição
                        </a>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
