import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/logo1.png'
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

interface navItemsI {
    text: string;
}

export function Header() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const navItems: navItemsI[] = [
        {
            text: "Home"
        },
        {
            text: "Serviços"
        },
         {
            text: "Projetos"
        },
         {
            text: "Revista"
        },
        
        
    ]

    function onClickOpenMenu() {
        setOpenMenu(!openMenu)
    }

    return (
        <header className={openMenu ? "flex-col h-[100vh] items-center justify-center bg-white fixed top-0 left-0 right-0 z-50 lg:flex lg:flex-row lg:justify-between lg:pr-24 md:pl-10" :"flex-col items-center justify-center bg-white fixed top-0 left-0 right-0 z-50 lg:flex lg:flex-row lg:justify-between lg:pr-24 lg:pl-10"} >
            <div className="flex items-center justify-between px-6 ">
                <img src={logo} alt="" width={250} />
                <button onClick={onClickOpenMenu} className="lg:hidden">
                    {
                        !openMenu ?  <GiHamburgerMenu size={28} /> : <IoClose size={30} />

                    }
                  
                </button>

            </div>
                
                <nav className={openMenu ? "flex lg:flex" : "hidden lg:flex "}>
                    <ul className="flex-col ml-8 lg:flex lg:flex-row lg:gap-10">
                        {
                            navItems.map((item) => <li className="pt-8">
                                <a href="" className="text-2xl font-medium">{item.text}</a>
                            </li>)
                        }
                    </ul>
                </nav>
        </header>
    );
}

