import {Sidebar} from "./Sidebar";
import {Navbar} from "./Navbar";
import {Dropdown} from "./Dropdown";
import {SideLink, SideLinkDropdown} from "./SideLink";

const Links = () => {
    return (
        <>
            <SideLink href="/dashboard">
                Доступные курсы
            </SideLink>
            <SideLink href="/dashboard/courses">
                Мои курсы
            </SideLink>
            <SideLink href="/dashboard/challenges">
                Мои задачи
            </SideLink>
            <SideLink>
                Чат
            </SideLink>
            <Dropdown text="Админ">
                <SideLinkDropdown href="/dashboard/courses">
                    Таблица курсов
                </SideLinkDropdown>
                <SideLinkDropdown href="/dashboard/courses/create">
                    Создать курс
                </SideLinkDropdown>
                <SideLinkDropdown href="/dashboard/challenges">
                    Таблица задач
                </SideLinkDropdown>
                <SideLinkDropdown href="/dashboard/challenges/create">
                    Создать задачу
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
                <Links/>
            </Sidebar>
            <div className="flex-1 h-full overflow-x-hidden overflow-y-auto">
                <Navbar>
                    <Links/>
                </Navbar>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}