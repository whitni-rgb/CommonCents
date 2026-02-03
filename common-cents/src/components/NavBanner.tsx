import { type NavBannerProps } from "../types/nav.types"

const NavBanner = ({navLinks}:NavBannerProps) => {
    return (
        <>
        <nav>
            {navLinks.map(link => <a key={link.path} href={link.path}>{link.label}</a>)}
        </nav>
        </>
    )
}

export default NavBanner