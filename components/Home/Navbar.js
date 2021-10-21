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

    return <nav className="bg-primary">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">

                <div className="flex space-x-4">
                    <div>
                        <a href="#" className="flex items-center py-5 px-2 text-white hover:text-gray-900">
                            <span className="text-2xl font-bold">Fantastic Waffle</span>
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                    <NavLink href="#">
                        Features
                    </NavLink>
                    <NavLink href="#">
                        Features
                    </NavLink>
                    <NavLink href="#">
                        Features
                    </NavLink>
                    <NavLink href="#">
                        Features
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
            <NavLink href="#" mobile>
                Features
            </NavLink>
            <NavLink href="#" mobile>
                Features
            </NavLink>
            <NavLink href="#" mobile>
                Features
            </NavLink>
            <NavLink href="#" mobile>
                Features
            </NavLink>
        </div>
    </nav>
}
export default Navbar