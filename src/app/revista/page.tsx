import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Revista() {
  return (
    <>
      <Header />
      <main>
        <section
          id="home"
          className="pt-32 flex flex-col items-center justify-center lg:items-start lg:justify-start lg:flex lg:flex-row lg:pt-44"
        >
          <div className="w-[90%] flex flex-col justify-center items-center lg:mr-12 lg:w-[46%] lg:pl-20 lg:items-start">
            <h1 className="text-[#02B1C8] font-bold text-4xl md:text-5xl text-center md:text-left">
              A revista da sala do empreendedor de Barbalha
            </h1>
            <p className="text-black text-lg text-center md:text-xl md:text-left mt-4">
              A revista da sala do empreendedor de barbalha já conta com 6
              edições, encontram-se informações sobre a atuação da sala do
              empreendedor do nosso municipio, cursos, e capacitações ofertadas
              aos empreendedores locais. Inscreve-se para receber todas as
              edições de forma online e gratuita!
            </p>
            <a
              href="https://forms.gle/XAv8s6mxzEfTrJCm9"
              className="bg-[#02B1C8] hover:bg-[#1c9aab] cursor-pointer font-semibold text-white text-xl w-52 rounded-xl py-3 flex items-center justify-center mt-4"
            >
              Receber revistas
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center lg:items-start lg:w-[45%] lg:justify-start lg:mt-0 ">
            <img
              src="/assets/images/barbalha-business-01-capa.jpg"
              alt="Foto da Revista Sala do Empreendedor de Barbalha"
              className="h-[46%] w-[46%] lg:h-[50%] lg:w-[50%] border-solid border-2 border-sky-500"
            />
            <img
              src="/assets/images/barbalha-business-02-capa.jpg"
              alt="Foto da Revista Sala do Empreendedor de Barbalha"
              className="h-[46%] w-[46%] lg:h-[50%] lg:w-[50%] border-solid border-2 border-sky-500"
            />
          </div>
        </section>
        <section className="pt-24 flex flex-col items-center">
          <h2 className="text-[#02B1C8] font-bold text-3xl md:text-5xl text-center md:text-left">
            Baixar revistas
          </h2>
          <div className="flex flex-col flex-wrap items-center justify-center lg:grid lg:grid-cols-3 lg:justify-center gap-10 lg:gap-16">
            <div className="flex flex-col mt-10 items-center">
              <h3 className="text-[#3A3178] text-2xl font-bold text-center">
                1º Edição
              </h3>
              <img
                src="/assets/images/barbalha-business-01-capa.jpg"
                alt=""
                className="h-[60vh] mt-4 lg:h-[24rem]"
              />
              <a
                href="/assets/pdfs/barbalha-business-1edicaco.pdf"
                download="Barbalha Business 1º edição.pdf"
                className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-52 rounded-xl py-2 flex items-center justify-center mt-4"
              >
                Baixar 1º edição
              </a>
            </div>
            <div className="flex flex-col mt-12 items-center">
              <h3 className="text-[#3A3178] text-2xl font-bold text-center">
                2º Edição
              </h3>
              <img
                src="/assets/images/barbalha-business-02-capa.jpg"
                alt=""
                className="h-[60vh] mt-4 lg:h-[24rem]"
              />
              <a
                href="/assets/pdfs/barbalha-business-2edicaco.pdf"
                download="Barbalha Business 2º edição.pdf"
                className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-52 rounded-xl py-2 flex items-center justify-center mt-4"
              >
                Baixar 2º edição
              </a>
            </div>
            <div className="flex flex-col mt-12 items-center">
              <h3 className="text-[#3A3178] text-2xl font-bold text-center">
                3º Edição
              </h3>
              <img
                src="/assets/images/barbalha-business-03-capa.jpg"
                alt=""
                className="h-[60vh] mt-4 lg:h-[24rem]"
              />
              <a
                href="/assets/pdfs/barbalha-business-3edicaco.pdf"
                download="Barbalha Business 3º edição.pdf"
                className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-52 rounded-xl py-2 flex items-center justify-center mt-4"
              >
                Baixar 3º edição
              </a>
            </div>
            <div className="flex flex-col mt-12 items-center">
              <h3 className="text-[#3A3178] text-2xl font-bold text-center">
                4º Edição
              </h3>
              <img
                src="/assets/images/barbalha-business-02-capa.jpg"
                alt=""
                className="h-[60vh] mt-4 lg:h-[24rem]"
              />
              <a
                href="/assets/pdfs/barbalha-business-1edicaco.pdf"
                download="Barbalha Business 4º edição.pdf"
                className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-52 rounded-xl py-2 flex items-center justify-center mt-4"
              >
                Baixar 4º edição
              </a>
            </div>
            <div className="flex flex-col mt-12 items-center">
              <h3 className="text-[#3A3178] text-2xl font-bold text-center">
                5º Edição
              </h3>
              <img
                src="/assets/images/barbalha-business-05-capa.jpg"
                alt=""
                className="h-[60vh] mt-4 lg:h-[24rem]"
              />
              <a
                href="/assets/pdfs/barbalha-business-5edicaco.pdf"
                download="Barbalha Business 5º edição.pdf"
                className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-52 rounded-xl py-2 flex items-center justify-center mt-4"
              >
                Baixar 5º edição
              </a>
            </div>
            <div className="flex flex-col mt-12 items-center">
              <h3 className="text-[#3A3178] text-2xl font-bold text-center">
                6º Edição
              </h3>
              <img
                src="/assets/images/barbalha-business-06-capa.jpg"
                alt=""
                className="h-[60vh] mt-4 lg:h-[24rem]"
              />
              <a
                href="/assets/pdfs/barbalha-business-6edicaco.pdf"
                download="Barbalha Business 6º edição.pdf"
                className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-52 rounded-xl py-2 flex items-center justify-center mt-4"
              >
                Baixar 6º edição
              </a>
            </div>
          </div>
          
        </section>
      </main>
      <Footer />
    </>
  );
}
