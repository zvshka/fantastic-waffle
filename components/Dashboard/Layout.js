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
                Мои задачи
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
        <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
            <Sidebar>
                <Urls/>
            </Sidebar>
            <div className="flex-1 h-full overflow-x-hidden overflow-y-auto">
                <Navbar>
                    <Urls/>
                </Navbar>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}