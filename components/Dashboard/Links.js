import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {logout, selectUser} from "../../features/authSlice";
import {SideLink, SideLinkDropdown} from "./SideLink";
import {Dropdown} from "./Dropdown";

export const Links = () => {

    const router = useRouter()
    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()

    const handleLogout = async (e) => {
        e.preventDefault()
        dispatch(logout())
        await router.push("/auth")
    }

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
            {user && user.role === "ADMIN" && <Dropdown text="Админ">
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
            </Dropdown>}
            <Dropdown text="Авторизация">
                {user && user.role && <SideLinkDropdown onClick={handleLogout}>
                    Выйти
                </SideLinkDropdown>}
                {!user.role && <SideLinkDropdown href="/auth">
                    Войти
                </SideLinkDropdown>}
            </Dropdown>
        </>
    )
}