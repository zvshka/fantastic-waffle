import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {

    return <nav className="bg-primary fixed inset-x-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">

                <div className="flex space-x-4">
                    <Link href="/#" passHref>
                        <span className="text-2xl font-bold flex items-center py-2 text-white close-and-heavy-text-shadow">Fantastic Waffle</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                    <NavLink href="/#advantages">
                        Наши преимущества
                    </NavLink>
                    <NavLink href="/#about">
                        О нас
                    </NavLink>
                    <NavLink href="/#team">
                        Наша команда
                    </NavLink>
                    <NavLink href="/#catalog">
                        Каталог
                    </NavLink>
                    <NavLink href="/auth" button>
                        Войти
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
}
export default Navbar