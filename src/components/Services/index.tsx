import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCalendar,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBusinessTime,
  faCheckDouble,
  faCircleInfo,
  faFileInvoiceDollar,
  faMagnifyingGlassDollar,
} from "@fortawesome/free-solid-svg-icons";

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
    <section
      id="services"
      className="pt-24 flex flex-col items-center lg:pl-20 lg:flex lg:flex-col lg:justify-center lg:items-center lg:pt-48"
    >
      <h2 className="text-[#02B1C8] font-bold text-4xl lg:text-5xl text-center :text-left ">
        Serviços
      </h2>

      {/* <ul className="flex flex-col gap-4 justify-center px-6 mt-8 lg:grid lg:grid-cols-2 lg:px-0 lg:items-center lg:mt-16 lg:gap-10">
        {servicesList.map((item) => (
          <li className="flex items-start gap-2 lg:mr-24" key={item.text}>
            <FaCheckCircle color="#3A3178" fontSize={30} />
            <span className="font-semibold text-lg lg:text-2xl">
              {item.text}
            </span>
          </li>
        ))}
      </ul> */}

      <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4 lg:gap-10">
        <a
        href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/obtencao-de-cnpj-acesso-restrito"
        target="_blank"
        className="flex flex-col items-center justify-center rounded-lg bg-[#f8f8f8] shadow-[rgba(0,0,0,0.16)] shadow-lg h-[10rem] w-[12rem] hover:bg-[#aeeaf2] lg:w-[13rem] lg:h-[11rem]">
          <div className="w-16">
            <FontAwesomeIcon icon={faAddressCard} />
          </div>
          <p className="font-semibold mt-3 text-lg text-center lg:text-xl">
            Formalize-se!
          </p>
        </a>

        <a 
        href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao"
        target="_blank"
        className="flex flex-col items-center justify-center rounded-lg bg-[#f8f8f8] shadow-[rgba(0,0,0,0.16)] shadow-lg	h-[10rem] w-[12rem] hover:bg-[#aeeaf2] lg:w-[13rem] lg:h-[11rem]">
          <div className="w-11">
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
          </div>
          <p className="font-semibold mt-3 text-lg text-center lg:text-xl">
            Emissão DAS
          </p>
        </a>
        <a 
        href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/declaracao-anual-de-faturamento"
        target="_blank"
        className="flex flex-col items-center justify-center rounded-lg bg-[#f8f8f8] shadow-[rgba(0,0,0,0.16)] shadow-lg	h-[10rem] w-[12rem] hover:bg-[#aeeaf2] lg:w-[13rem] lg:h-[11rem]">
          <div className="w-14">
            <FontAwesomeIcon icon={faBusinessTime} />
          </div>
          <p className="font-semibold mt-2 text-lg text-center lg:text-xl">
            Declaração anual do MEI
          </p>
        </a>
        <a 
        href="https://www8.receita.fazenda.gov.br/SimplesNacional/controleAcesso/Autentica.aspx?id=37"
        target="_blank"
        className="flex flex-col items-center justify-center rounded-lg bg-[#f8f8f8] shadow-[rgba(0,0,0,0.16)] shadow-lg	h-[10rem] w-[12rem] hover:bg-[#aeeaf2] lg:w-[13rem] lg:h-[11rem]">
          <div className="w-14">
            <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
          </div>
          <p className="font-semibold mt-2 text-lg text-center lg:text-xl">
            Parcelamento de dívidas tributárias
          </p>
        </a>
        <a 
        href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/nota-fiscal"
        target="_blank"
        className="flex flex-col items-center justify-center rounded-lg bg-[#f8f8f8] shadow-[rgba(0,0,0,0.16)] shadow-lg	h-[10rem] w-[12rem] hover:bg-[#aeeaf2] lg:w-[13rem] lg:h-[11rem]">
          <div className="w-14">
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>
          <p className="font-semibold mt-2 text-lg text-center lg:text-xl">
            Emissão de notas fiscais
          </p>
        </a>
        <a 
        href="https://wa.me/558892317295"
        target="_blank"
        className="flex flex-col items-center justify-center rounded-lg bg-[#f8f8f8] shadow-[rgba(0,0,0,0.16)] shadow-lg	h-[10rem] w-[12rem] hover:bg-[#aeeaf2] lg:w-[13rem] lg:h-[11rem]">
          <div className="w-14">
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <p className="font-semibold mt-2 text-lg text-center lg:text-xl">
            Crédito
          </p>
        </a>
        <a 
        href="https://wa.me/558892317295"
        target="_blank"
        className="flex flex-col items-center justify-center rounded-lg bg-[#f8f8f8] shadow-[rgba(0,0,0,0.16)] shadow-lg	h-[10rem] w-[12rem] hover:bg-[#aeeaf2] lg:w-[13rem] lg:h-[11rem]">
          <div className="w-14">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <p className="font-semibold mt-2 text-lg text-center lg:text-xl">
            Eventos e capacitações
          </p>
        </a>
      <a 
        href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/baixa-de-mei"
        target="_blank"
        className="flex flex-col items-center justify-center rounded-lg bg-[#f8f8f8] shadow-[rgba(0,0,0,0.16)] shadow-lg	h-[10rem] w-[12rem] hover:bg-[#aeeaf2] lg:w-[13rem] lg:h-[11rem]">
          <div className="w-14">
            <FontAwesomeIcon icon={faCheckDouble} />
          </div>
          <p className="font-semibold mt-2 text-lg text-center lg:text-xl">
            Baixa do MEI{" "}
          </p>
        </a>
      </div>

    </section>
  );
}
