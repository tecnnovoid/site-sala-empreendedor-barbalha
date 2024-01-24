import { FaCheckCircle } from "react-icons/fa";

export function Services() {
  const servicesList: Service[] = [
    {
      text: "Orientação para abertura e alteração do MEI",
    },
    {
      text: "Emissão de boletos",
    },
    {
      text: "Declaração anual do MEI",
    },
    {
      text: "Parcelamento de dívidas tributárias",
    },
    {
      text: "Orientação sobre crédito",
    },
    {
      text: "Inscrição em eventos e capacitações",
    },
    {
      text: "Orientação para emissão de notas fiscais",
    },
    {
      text: "Orientação baixa do MEI ",
    },
  ];

  return (
    <section id="services" className="pt-24 lg:pl-20 lg:flex lg:flex-col lg:justify-center lg:items-center lg:pt-48">
      <h2 className="text-[#02B1C8] font-bold text-4xl lg:text-5xl text-center :text-left ">
        Serviços ofertados
      </h2>

      <ul className="flex flex-col gap-4 justify-center px-6 mt-8 lg:grid lg:grid-cols-2 lg:px-0 lg:items-center lg:mt-16 lg:gap-10">
        {servicesList.map((item) => (
          <li className="flex items-start gap-2 lg:mr-24">
            <FaCheckCircle color="#3A3178" fontSize={30} />
            <span className="font-semibold text-lg lg:text-2xl">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
