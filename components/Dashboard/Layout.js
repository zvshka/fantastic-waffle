import {Sidebar} from "./Sidebar";
import {Navbar} from "./Navbar";
import {Links} from "./Links";
import {motion} from "framer-motion";
import {useRouter} from "next/router";

export const Layout = ({children, title}) => {
    const router = useRouter()
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
                    <div
                        className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
                        <h1 className="text-2xl font-semibold">{title}</h1>
                    </div>
                    <div className="p-8">
                        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
                            pageInitial: {
                                opacity: 0
                            },
                            pageAnimate: {
                                opacity: 1
                            },
                        }}>
                            {children}
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>

    )
}