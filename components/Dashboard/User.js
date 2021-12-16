import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {selectUserPanel, toggleUser} from "../../features/submenusSlice";

export const User = () => {

    const dispatch = useAppDispatch();
    const userPanel = useAppSelector(selectUserPanel)

    const handleChange = (e) => {
        e.preventDefault()
        dispatch(toggleUser())
    }

    return <div className="relative flex items-center ml-auto md:ml-0">
        <button
            type="button"
            aria-haspopup="true"
            aria-expanded={userPanel}
            onFocus={handleChange}
            onBlur={handleChange}
            className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
        >
            <span className="sr-only">User menu</span>
            <img className="w-10 h-10 rounded-full"
                 src="https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128"
                 alt="Ahmed Kamel"/>
        </button>
        <div
            className={`absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5
            dark:bg-dark focus:outline-none ${userPanel ? "" : "hidden"}`}
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
                Профиль
            </a>
            <a
                href="#"
                role="menuitem"
                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-blue-600"
            >
                Настройки
            </a>
            <a
                href="#"
                role="menuitem"
                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-blue-600"
            >
                Выход
            </a>
        </div>
    </div>
}