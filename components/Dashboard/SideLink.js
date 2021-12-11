export const SideLink = ({children, href}) => {
    return <a
        href={href}
        role="menuitem"
        className="block p-2 text-sm text-gray-500 transition-colors
         duration-200 rounded-md dark:text-gray-400
         dark:hover:text-light hover:text-gray-800"
    >
        {children}
    </a>
}