

export interface NavLink {
    label : string;
    path: string;
    icon?: string;
}

export interface NavBannerProps {
    navLinks: NavLink[]
}