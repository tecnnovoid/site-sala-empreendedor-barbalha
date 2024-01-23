import magazinesImg from "../../assets/Revistas.png"

export function Magazines() {
    return (
        <section id="magazine" className="flex flex-col items-center mt-28 lg:flex-row-reverse">
            <div className="flex flex-col items-center mb-8">
                <h3 className="text-[#3A3178] w-[90%] text-3xl font-bold text-center lg:text-3xl lg:font-bold">
                    A revista da sala do empreendedor de barbalha
                </h3>
                <p className="w-[90%] text-center mt-4 text-lg lg:w-[80%] lg:text-xl">
                    A revista da sala do empreendedor de barbalha já conta com 4 edições, encontram-se informações sobre a atuação da sala do empreendedor no nosso municipio, cursos, e capacitações ofertadas aos empreendedores
                    locais .

                </p>
                 <button className="bg-[#02B1C8] font-semibold text-white text-xl w-56 rounded-xl py-3 flex items-center justify-center mt-4">
          Acessar revistas
        </button>
            </div>
            <img src={magazinesImg} alt="" className="w-[95%] lg:w-[20%]" />

        </section>
    )
}