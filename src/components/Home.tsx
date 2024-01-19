import imgSala1 from '../assets/img-sala1.png'
import imgSala2 from '../assets/img-sala2.png'

export function Home(){
    return(
        <section className=" mt-32 flex flex-col items-center lg:flex lg:flex-row lg:mt-36">
            <div className="w-[90%] flex flex-col justify-center items-center lg:w-[50%] lg:pl-20 md:items-start">
            <h1 className="text-[#02B1C8] font-bold text-4xl md:text-5xl text-center md:text-left">Sala do Empreendedor de Barbalha</h1>
            <p className="text-black text-lg text-center md:text-xl md:text-left mt-4">A sala do empreendedor é uma iniciativa da prefeitura de Barbalha com o apoio do Sebrae/CE através de ações gratuitas voltadas para impulsionar o desenvolvimento de negócios locais.</p>
            <button className="bg-[#02B1C8] font-semibold text-white text-xl w-32 rounded py-3 flex items-center justify-center mt-4">Vídeo</button>

            </div>

            <div className="mt-8 md:flex md:flex-row md:gap-8">
                <img src={imgSala1} alt="" />
                <img src={imgSala2} alt="" className="hidden lg:flex"/>

            </div>
        </section>
    );
}