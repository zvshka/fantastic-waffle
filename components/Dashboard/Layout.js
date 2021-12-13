import {Sidebar} from "./Sidebar";
import {Navbar} from "./Navbar";
import {Dropdown} from "./Dropdown";
import {SideLink, SideLinkDropdown} from "./SideLink";

const Urls = () => {
    return (
        <>
            <SideLink>
                Главная
            </SideLink>
            <SideLink>
                Мои курсы
            </SideLink>
            <SideLink>
                Чат
            </SideLink>
            <Dropdown text="Админ">
                <SideLinkDropdown href="#">
                    Таблица пользователей
                </SideLinkDropdown>
                <SideLinkDropdown href="#">
                    Таблица курсов
                </SideLinkDropdown>
                <SideLinkDropdown href="#">
                    Таблица задач
                </SideLinkDropdown>
            </Dropdown>
            <Dropdown text="Авторизация">
                <SideLinkDropdown href="#">
                    Сменить пароль
                </SideLinkDropdown>
                <SideLinkDropdown href="#">
                    Выйти
                </SideLinkDropdown>
            </Dropdown>
        </>
    )
}

export const Layout = ({children}) => {
    return (
        <main className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
            <Sidebar>
                <Urls/>
            </Sidebar>
            <Navbar>
                <Urls/>
            </Navbar>
            {children}
        </main>
    )
}