export function VirtualAttendant() {
  return (
    <section className="flex flex-col mt-28 items-center lg:flex-row lg:justify-center lg:mt-40">
      <div className="flex flex-col items-center">
        <h3 className="text-[#3A3178] text-3xl font-bold text-center lg:text-4xl lg:font-bold">
          Atendente Virtual Bárbara
        </h3>
        <p className="w-[90%] text-center mt-4 text-lg lg:w-[80%] lg:text-xl">
          É um instrumento de inteligência artificial que nos auxilia diariamente na demanda de atendimento da sala.
        </p>
        <a href="https://wa.me/558892317295" className="bg-[#02B1C8] hover:bg-[#1c9aab] font-semibold text-white text-xl w-56 rounded-xl py-3 flex items-center justify-center mt-4">
          Acessar Bárbara
        </a>
      </div>
      <img
        src="/assets/images/barbara.png"
        alt="Atendente Virtual Bárbara"
        className="mt-6 w-[90%] lg:w-[50%] lg:mr-20"
      />
    </section>
  );
}
