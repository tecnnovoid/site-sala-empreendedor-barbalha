import magazinesImg from "../../assets/revistas.png"

export function Magazines() {
    return (
        <section id="magazine" className="flex flex-col items-center mt-28 lg:flex-row-reverse">
            <div className="flex flex-col items-center mb-8">
                <h3 className="text-[#3A3178] w-[90%] text-3xl font-bold text-center lg:text-3xl lg:font-bold">
                    A revista da sala do empreendedor de Barbalha
                </h3>
                <p className="w-[90%] text-center mt-4 text-lg lg:w-[80%] lg:text-xl">
                    A revista da sala do empreendedor de Barbalha já conta com 6 edições, encontram-se informações sobre a atuação da sala do empreendedor no nosso municipio, cursos, e capacitações ofertadas aos empreendedores
                    locais .

                </p>
                <a href="https://salaempreendedorbarbalha.com.br/revista" className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-56 rounded-xl py-3 flex items-center justify-center mt-4">
                    Acessar revistas 
                </a>
            </div>
            {/* <img src="/assets/images/revistas.png" alt="Revistas da Sala do Empreendedor de Barbalha" className="w-[95%] lg:w-[45%]" /> */}

        </section>
    );
}
