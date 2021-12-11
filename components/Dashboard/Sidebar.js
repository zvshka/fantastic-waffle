import {Dropdown} from "./Dropdown";
import {SideLink} from "./SideLink";

export const Sidebar = ({children}) => {
    return (
        <aside className="flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary dark:bg-darker md:block">
            <div className="flex flex-col h-full">
                <nav aria-label="Main" className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
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
                </nav>
                <div className="flex-shrink-0 px-2 py-4 space-y-2">
                    <button
                        type="button"
                        className="flex items-center justify-center w-full px-4 py-2 text-sm
                        text-white bg-secondary rounded-md hover:bg-blue-800 focus:outline-none
                        focus:ring focus:ring-blue-700 focus:ring-offset-1 focus:ring-offset-white d
                        ark:focus:ring-offset-dark"
                    >
                        <span aria-hidden="true">
                          <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            />
                          </svg>
                        </span>
                        <span>Customize</span>
                    </button>
                </div>
            </div>
        </aside>
    )
}