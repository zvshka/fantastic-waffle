import {useState} from "react";
import NavLink from "./NavLink";

const HamburgerSvg = () => <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"/>
</svg>

const Navbar = () => {

    const [navClosed, toggleNav] = useState(true)

    return <nav className="bg-primary fixed inset-x-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">

                <div className="flex space-x-4">
                    <a href="#" className="flex items-center py-2 text-white hover:text-gray-900">
                        <span className="text-xl font-bold">Fantastic Waffle</span>
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                    <NavLink href="#advantages">
                        Наши преимущества
                    </NavLink>
                    <NavLink href="#about">
                        О нас
                    </NavLink>
                    <NavLink href="#">
                        Наша команда
                    </NavLink>
                    <NavLink href="#">
                        Каталог
                    </NavLink>
                    <NavLink href="#">
                        <button className="px-8 py-2 bg-secondary text-white rounded-2xl font-bold text-md">
                            Войти
                        </button>
                    </NavLink>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => toggleNav(!navClosed)}>
                        <HamburgerSvg/>
                    </button>
                </div>

            </div>
        </div>

        <div className={`md:hidden ${navClosed ? "hidden" : ""}`}>
            <NavLink href="#advantages" mobile>
                Наши преимущества
            </NavLink>
            <NavLink href="#about" mobile>
                О нас
            </NavLink>
            <NavLink href="#" mobile>
                Наша Команда
            </NavLink>
            <NavLink href="#" mobile>
                Каталог
            </NavLink>
            <NavLink href="#" mobile>
                <button className="px-16 py-2 bg-secondary text-white rounded-2xl font-bold text-md">
                    Войти
                </button>
            </NavLink>
        </div>
    </nav>
}
export default Navbar