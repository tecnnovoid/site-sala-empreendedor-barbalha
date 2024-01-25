import selos from "../../assets/selos.jpg";

export function SeloOuro() {
  return (
    <section className="flex flex-col mt-28 items-center lg:flex-row lg:justify-center lg-mt-40  lg:pr-20">
      <div className="flex flex-col items-center lg:w-[50%] lg:mr-10">
        <h3 className="text-[#3A3178] text-3xl font-bold text-center lg:text-3xl lg:font-bold">
          Selo Ouro de Qualidade em Atendimento
        </h3>
        <p className="w-[90%] text-center mt-4 text-lg lg:w-[90%] lg:text-xl">
          A Sala do Empreendedor de Barbalha recebe Selo Ouro de Qualidade em Atendimento nos anos de 2022 e 2023.
          O Selo Ouro de Qualidade é um selo de confiança que não apenas enaltece a Sala do Empreendedor de Barbalha, mas também fortalece a imagem do município como um ambiente propício para o empreendedorismo.
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <img
          src="/assets/images/selos.jpg"
          alt="Selo Ouro de Qualidade em Atendimento"
          className="mt-6 h-[50vh] lg:h-[60vh] lg:w-[50%]"
        />
        <img
          src={"/assets/images/selo2023.jpg"}
          alt="Selo Ouro de Qualidade em Atendimento"
          className="mt-6 h-[50vh] lg:h-[60vh] lg:w-[50%]"
        />

      </div>
    </section>
  );
}
