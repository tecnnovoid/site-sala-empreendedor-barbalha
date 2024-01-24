import escolas from "../../assets/escolas.jpg";

export function Schools() {
  return (
    <section className="flex flex-col mt-24 items-center pb-10 lg:flex-row-reverse lg:justify-center lg:mt-40">
      <div className="flex flex-col items-center">
        <h3 className="text-[#3A3178] w-[90%] text-3xl font-bold text-center lg:text-3xl lg:font-bold">
          Empreendedorismo nas Escolas de Ensino Medio em Tempo Integral
        </h3>
        <p className="w-[90%] text-center mt-4 text-lg lg:w-[80%] lg:text-xl">
          Uma Perspectiva no Processo de Ensino e Aprendizagem- Incentivar o empreendedorismo aproveitando as vivências e experiências do ambiente escolar, no intuito de preparar o jovem a desenvolver habilidades, estimular a autonomia e a busca de inovações.
        </p>
      </div>
      <img src={escolas} alt="Foto do projeto Empreendedorismo nas Escolas de Ensino Medio em Tempo Integral" className="mt-6 w-[90%] lg:w-[50%]"/>
    </section>
  );
}
