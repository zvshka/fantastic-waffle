import {useState} from "react";

export const Navbar = () => {

    const [profileOpen, setOpen] = useState(false)
    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(!profileOpen)
    }

    return <div className="flex flex-col flex-1 min-h-screen overflow-x-hidden overflow-y-auto">
        <header className="relative bg-white dark:bg-darker">
            <div className="flex items-center justify-between p-2 border-b dark:border-blue-800">
                <button
                    // TODO global state open sidebar
                    className="p-1 text-blue-400 transition-colors duration-200
                    rounded-md bg-blue-50 hover:text-blue-600 hover:bg-blue-100
                    dark:hover:text-light dark:hover:bg-blue-700 dark:bg-dark
                    md:hidden focus:outline-none focus:ring"
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
                    //TODO mobile submenu open
                    className="p-1 text-blue-400 transition-colors duration-200 rounded-md bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-light dark:hover:bg-blue-700 dark:bg-dark md:hidden focus:outline-none focus:ring"
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

                <nav aria-label="Secondary" className="hidden space-x-2 md:flex md:items-center">
                    <button
                        className="p-2 text-blue-400 transition-colors duration-200 rounded-full bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-light dark:hover:bg-blue-700 dark:bg-dark focus:outline-none focus:bg-blue-100 dark:focus:bg-blue-700 focus:ring-blue-800"
                    >
                        <span className="sr-only">Open Notification panel</span>
                        <svg
                            className="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>
                    <button
                        className="p-2 text-blue-400 transition-colors duration-200 rounded-full bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-light dark:hover:bg-blue-700 dark:bg-dark focus:outline-none focus:bg-blue-100 dark:focus:bg-blue-700 focus:ring-blue-800"
                    >
                        <span className="sr-only">Open search panel</span>
                        <svg
                            className="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                    <button
                        className="p-2 text-blue-400 transition-colors duration-200 rounded-full bg-blue-50 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-light dark:hover:bg-blue-700 dark:bg-dark focus:outline-none focus:bg-blue-100 dark:focus:bg-blue-700 focus:ring-blue-800"
                    >
                        <span className="sr-only">Open settings panel</span>
                        <svg
                            className="w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </button>
                    <div className="relative">
                        <button
                            type="button"
                            aria-haspopup="true"
                            aria-expanded={profileOpen}
                            onFocus={handleOpen}
                            onBlur={handleOpen}
                            className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
                        >
                            <span className="sr-only">User menu</span>
                            <img className="w-10 h-10 rounded-full"
                                 src="https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128"
                                 alt="Ahmed Kamel"/>
                        </button>
                        <div
                            className={`absolute right-0 w-48 py-1 bg-white
                             rounded-md shadow-lg top-12 ring-1 ring-black 
                             ring-opacity-5 dark:bg-dark focus:outline-none
                             ${profileOpen ? "block" : "hidden"}`}
                            tabIndex="-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-label="User menu"
                        >
                            <a
                                href="#"
                                role="menuitem"
                                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-blue-600"
                            >
                                Your Profile
                            </a>
                            <a
                                href="#"
                                role="menuitem"
                                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-blue-600"
                            >
                                Settings
                            </a>
                            <a
                                href="#"
                                role="menuitem"
                                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-blue-600"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </div>
}