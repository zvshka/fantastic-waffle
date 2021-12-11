import {useState} from "react";

export const Dropdown = ({text, icon, children}) => {

    const [open, setOpen] = useState(false)

    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(!open)
    }

    return <div>
        <a
            onClick={handleOpen}
            className="flex items-center p-2 transition-colors
            rounded-md dark:text-light hover:bg-secondary hover:text-white dark:hover:bg-blue-600"
            role="button"
            aria-haspopup="true"
            aria-expanded={open}>
            <span aria-hidden="true">{icon}</span>
            <span className="ml-2 text-sm"> {text} </span>
            <span className="ml-auto">
            <svg className="w-4 h-4 transition-transform transform"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
        </span>
        </a>
        <div role="menu" className={`mt-2 space-y-2 px-7 ${open ? "block" : "hidden"}`} aria-label="Dashboards">
            {children}
        </div>
    </div>
}