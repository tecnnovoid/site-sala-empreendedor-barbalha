export function ItinerantEntrepreneur() {
  return (
    <section className="flex flex-col mt-28 items-center lg:flex-row lg:justify-center lg-mt-40  lg:pr-20">
      <div className="flex flex-col items-center">
        <h3 className="text-[#3A3178] text-3xl font-bold text-center lg:text-3xl lg:font-bold">
          Empreendedor Itinerante
        </h3>
        <p className="w-[90%] text-center mt-4 text-lg lg:w-[80%] lg:text-xl">
          Prestar atendimento na zona rural atuando de forma educativa,
          incentivando a formalização dos pequenos negócios, objetivando a
          adesão dos empreendedores aos serviços da sala do empreendedor
        </p>
      </div>
      <img
        src="/assets/images/intinerante.png"
        alt="Empreendedor Itinerante"
        className="mt-6 w-[90%]"
      />
    </section>
  );
}
