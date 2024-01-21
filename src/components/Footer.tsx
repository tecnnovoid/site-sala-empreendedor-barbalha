import logo from "../assets/logo2.png";
import logoPrefeitura from "../assets/logo-prefeitura.png";
import sebrae from "../assets/sebrae.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MenuItem } from "../interfaces/menuItem";

export function Footer() {

  const itensMenu: MenuItem[] = [
    {
      text: "Home",
    },
    {
      text: "Serviços",
    },
    {
      text: "Projetos",
    },
    {
      text: "Revista",
    },
  ];

  return (
    <footer className="bg-[#4C3E9D] flex flex-col pt-8 pb-10 mt-20 lg:pb-8">
      <div className="flex justify-between pr-8 lg:pl-16 lg:pr-20">
        <img src={logo} alt="Logo Sala do Empreendedor" className="w-[220px] lg:w-[280px]" />

        <nav className="hidden lg:flex mt-2">
          <ul className="flex-col lg:flex lg:flex-row lg:gap-10">
            {itensMenu.map((item) => (
              <li className="pt-4">
                <a href="" className="text-xl font-medium text-white">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 mt-3">
          <a href="https://instagram.com/liviaaraujo._" target="_blank">
            <FaInstagram size={40} color="#fff" />
          </a>
          <a href="https://wa.me/558892858695" target="_blank">
            <FaWhatsapp size={40} color="#fff" />
          </a>
        </div>
      </div>

      <div className="h-[1px] w-[90%] ml-8 bg-white mt-4 lg:ml-16 lg:w-[92%]"></div>

      <div className="pl-8 text-white text-lg mt-8 lg:flex lg:flex-row-reverse lg:justify-between lg:pl-16 lg:pr-20">
        <div className="flex gap-8 mb-12 lg:mb-0">
          <img src={sebrae} alt="Logo Sebrae" className="h-16" />
          <img src={logoPrefeitura} alt="Logo Prefeitura de Barbalha" className="h-16" />
        </div>
        <div>
          <p>©Sala do Empreendedor de Barbalha 2023</p>
          <p>Desenvolvido por Tecnnovoid</p>
        </div>
      </div>
    </footer>
  );
}
