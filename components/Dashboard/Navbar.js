import {useState} from "react";
import {User} from "./User";
import {Submenu} from "./Submenu";

export const Navbar = ({children}) => {
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const [mainOpen, setMainOpen] = useState(false)

    const handleSubOpen = (e) => {
        e.preventDefault()
        setSubmenuOpen(!submenuOpen)
    }
    const handleMainOpen = (e) => {
        e.preventDefault()
        setMainOpen(!mainOpen)
    }

    return <>
        <header className="relative bg-white dark:bg-darker">
            <div className="flex items-center justify-between p-2 border-b dark:border-blue-800">
                <button
                    onClick={handleMainOpen}
                    className="p-1 text-secondary transition-colors duration-200
                    rounded-md bg-blue-50 hover:text-blue-600 hover:bg-blue-100
                    dark:hover:text-light dark:hover:bg-blue-700 dark:bg-dark
                    lg:hidden focus:outline-none focus:ring"
                >
                    <span className="sr-only">Open main menu</span>
                    <span aria-hidden="true">
                      <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                      </svg>
                    </span>
                </button>
                <a
                    href="#"
                    className="inline-block text-2xl font-bold tracking-wider text-secondary uppercase dark:text-light"
                >
                    Fantastic Waffle
                </a>

                <button
                    onClick={handleSubOpen}
                    className="p-1 text-secondary transition-colors duration-200 rounded-md bg-blue-50
                    hover:text-blue-600 hover:bg-blue-100 dark:hover:text-light dark:hover:bg-blue-700
                    dark:bg-dark lg:hidden focus:outline-none focus:ring"
                >
                    <span className="sr-only">Open sub menu</span>
                    <span aria-hidden="true">
                      <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </span>
                </button>

                <nav aria-label="Secondary" className="hidden space-x-2 lg:flex md:items-center">
                    <Submenu/>
                    <User/>
                </nav>
                {submenuOpen &&
                    <nav
                        className={`absolute flex items-center p-4 bg-white 
                        rounded-md shadow-lg dark:bg-darker top-16 inset-x-4 lg:hidden`}
                        aria-label="Secondary"
                    >
                        <div className="space-x-2">
                            <Submenu/>
                        </div>
                        <User/>
                    </nav>
                }
            </div>
            {mainOpen && <div className={`border-b lg:hidden dark:border-primary-darker`}>
                <nav aria-label="Main" className="px-2 py-4 space-y-2">
                    {children}
                </nav>
            </div>}
        </header>
    </>
}