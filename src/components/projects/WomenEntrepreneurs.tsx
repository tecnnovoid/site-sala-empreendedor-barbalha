import womenEntrepreneursImg from "../../assets/mulheres-emprreendedoras.jpg";

export function WomenEntrepreneurs() {
  return (
    <div className="flex flex-col mt-12 items-center lg:flex-row-reverse lg:justify-center">
      <div className="flex flex-col items-center">
        <h3 className="text-[#3A3178] text-3xl font-bold text-center lg:text-4xl lg:font-bold">
          Mulheres empreendedoras
        </h3>
        <p className="w-[90%] text-center mt-4 text-lg lg:w-[80%] lg:text-xl">
          Capacitamos mulheres a partir da educação financeira e 
          conscientizamos da formalização do MEI. O projeto já capacitou 300
          empreendedoras em 3 anos e 70 capacitações em parceria com
          instituições financeiras como SICREDI e Banco do Nordeste.
        </p>
      </div>
      <img
        src={womenEntrepreneursImg}
        alt="Mulheres empreendedoras"
        className="mt-6 w-[90%] lg:w-[50%]"
      />
    </div>
  );
}
