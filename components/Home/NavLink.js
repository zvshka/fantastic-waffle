import Link from "next/link";

const NavLink = ({href, children, mobile=false}) => {
    return <Link href={href}>
        {mobile ? <a className="block py-2 px-4 text-sm text-white flex justify-center bg-primary">{children}</a> :
            <a className="py-5 px-3 text-white">{children}</a>}
    </Link>
}

export default NavLink