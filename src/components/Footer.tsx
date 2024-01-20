import logo from "../assets/logo2.png";
import logoPrefeitura from "../assets/logo-prefeitura.png";
import sebrae from "../assets/sebrae.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#4C3E9D] flex flex-col pt-8 pb-10 mt-20">
      <div className="flex justify-between pr-8 pl-4">
        <img src={logo} alt="" width={220} />
        <div className="flex gap-4 mt-3">
          <a href="https://instagram.com/liviaaraujo._" target="_blank">
            <FaInstagram size={35} color="#fff" />
          </a>
          <a href="https://wa.me/558892858695" target="_blank">
            <FaWhatsapp size={35} color="#fff" />
          </a>
        </div>
      </div>

      <div className="h-[1px] w-[90%] ml-8 bg-white mt-4"></div>

      <div className="pl-8 text-white text-lg mt-8 lg:flex lg:flex-row-reverse">
        <div className="flex gap-8 mb-12">
          <img src={sebrae} alt="" className="h-20" />
          <img src={logoPrefeitura} alt="" className="h-20" />
        </div>
        <div>
          <p>©Sala do Empreendedor de Barbalha 2023</p>
          <p>Desenvolvido por Tecnnovoid</p>
        </div>
      </div>
    </footer>
  );
}
