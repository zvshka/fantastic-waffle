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
                <SideLinkDropdown href="/dashboard/admin/courses">
                    Таблица курсов
                </SideLinkDropdown>
                <SideLinkDropdown href="/dashboard/courses/create">
                    Создать курс
                </SideLinkDropdown>
                <SideLinkDropdown href="/dashboard/admin/challenges">
                    Таблица задач
                </SideLinkDropdown>
                <SideLinkDropdown href="/dashboard/challenges/create">
                    Создать задачу
                </SideLinkDropdown>
            </Dropdown>
            <Dropdown text="Авторизация">
                <SideLinkDropdown onClick={e => 1}>
                    Выйти
                </SideLinkDropdown>
            </Dropdown>
        </>
    )
}

export const Layout = ({children, title}) => {
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
                    <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
                        <h1 className="text-2xl font-semibold">{title}</h1>
                    </div>
                    <div className="p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}