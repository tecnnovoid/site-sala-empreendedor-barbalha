import barbara from "../../assets/barbara.png";

export function VirtualAttendant() {
  return (
    <div className="flex flex-col mt-28 items-center lg:flex-row lg:justify-center lg:mt-40">
      <div className="flex flex-col items-center">
        <h3 className="text-[#3A3178] text-3xl font-bold text-center lg:text-4xl lg:font-bold">
          Atendente Virtual Bárbara
        </h3>
        <p className="w-[90%] text-center mt-4 text-lg lg:w-[80%] lg:text-xl">
          É um instrumento de inteligência artificial que nos auxilia diariamente na demanda de atendimento da sala.
        </p>
      </div>
      <img
        src={barbara}
        alt="Atendente Virtual Bárbara"
        className="mt-6 w-[90%] lg:w-[50%]"
      />
    </div>
  );
}
