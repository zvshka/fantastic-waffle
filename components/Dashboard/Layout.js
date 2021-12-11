import {Sidebar} from "./Sidebar";
import {Navbar} from "./Navbar";
import {Dropdown} from "./Dropdown";
import {SideLink} from "./SideLink";

const Urls = () => {
    return (
        <>
            <Dropdown text="Dashboards">
                <SideLink href="#">
                    Default
                </SideLink>
                <SideLink href="#">
                    Default
                </SideLink>
                <SideLink href="#">
                    Default
                </SideLink>
            </Dropdown>
            <Dropdown text="Dashboards">
                <SideLink href="#">
                    Default
                </SideLink>
                <SideLink href="#">
                    Default
                </SideLink>
                <SideLink href="#">
                    Default
                </SideLink>
            </Dropdown>
            <Dropdown text="Dashboards">
                <SideLink href="#">
                    Default
                </SideLink>
                <SideLink href="#">
                    Default
                </SideLink>
                <SideLink href="#">
                    Default
                </SideLink>
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