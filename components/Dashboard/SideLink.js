import Link from "next/link";
export const SideLinkDropdown = ({children, href}) => {
    return <Link href={href ? href : "/dashboard"}>
        <a
            role="menuitem"
            className="block p-2 text-sm text-gray-500 transition-colors
         duration-200 rounded-md dark:text-gray-400
         dark:hover:text-light hover:text-gray-800"
        >
            {children}
        </a>
    </Link>
}
export const SideLink = ({children, icon, href}) => {
    return <Link href={href ? href : "/dashboard"}>
        <a
            href={href}
            className="flex items-center p-2 transition-colors
            rounded-md dark:text-light hover:bg-secondary hover:text-white dark:hover:bg-blue-600"
            role="button"
            aria-haspopup="true"
        >
            <span aria-hidden="true">{icon}</span>
            <span className="ml-2 text-sm"> {children} </span>
        </a>
    </Link>
}