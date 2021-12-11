import {Sidebar} from "./Sidebar";
import {Navbar} from "./Navbar";

export const Layout = ({children}) => {
    return (
        <main className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
            <Sidebar/>
            <Navbar/>
            {children}
        </main>
    )
}