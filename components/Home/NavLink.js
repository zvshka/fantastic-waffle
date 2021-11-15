import Link from "next/link";
import Button from "./Button";

const NavLink = ({href, children, mobile = false, button = false}) => {
    return <Link href={href}>
        {mobile ?
            <a className={`flex justify-center bg-primary ${button ? "" : "py-2 px-4 text-sm text-white"}`}>
                {button ?
                    <Button>{children}</Button> : children
                }
            </a> :
            <a className={`${button ? "py-2" : "py-5 px-3"} text-white`}>
                {button ?
                    <Button>{children}</Button> : children
                }
            </a>}
    </Link>
}

export default NavLink