import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo1.png";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MenuItem } from "../interfaces/menuItem";

export function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const itensMenu: MenuItem[] = [
    {
      text: "Home",
      id: "home",
    },
    {
      text: "Serviços",
      id: "services",
    },
    {
      text: "Projetos",
      id: "projects",
    },
    {
      text: "Revista",
      id: "magazine",
    },
  ];

  function onClickOpenMenu() {
    setOpenMenu(!openMenu);
  }

  function onClickCloseMenu() {
    setOpenMenu(false);
  }

  return (
    <header
      className={
        openMenu
          ? "flex-col h-[100vh] items-center justify-center bg-white fixed top-0 left-0 right-0 z-50 lg:flex lg:flex-row lg:justify-between lg:pr-24 md:pl-10"
          : "flex-col items-center justify-center bg-white fixed top-0 left-0 right-0 z-50 lg:flex lg:flex-row lg:justify-between lg:pr-24 lg:pl-10"
      }
    >
      <div className="flex items-center justify-between pl-4 pr-8">
        <a href="#">
          <img
            src={logo}
            alt="Logo Sala do Empreendedor de Barbalha"
            className="h-24"
          />
        </a>
        <button onClick={onClickOpenMenu} className="lg:hidden">
          {!openMenu ? <GiHamburgerMenu size={35} /> : <IoClose size={35} />}
        </button>
      </div>

      <nav className={openMenu ? "flex lg:flex" : "hidden lg:flex "}>
        <ul className="flex-col ml-8 lg:flex lg:flex-row lg:gap-10">
          {itensMenu.map((item) => (
            <li className="pt-8 lg:pt-0">
              <a
                href={"#" + item.id}
                onClick={onClickCloseMenu}
                className="text-xl font-medium"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
