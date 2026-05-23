import Link from "next/link";
import style from "./NavButton.module.css";

/*
    parameters: navTo: the name of the page you want to go to
                nav: the link of the page you want to go to
*/
export const NavButton = ({navTo, nav}: {navTo: string, nav: string}) => {
    return (
        <Link className = {style.NavButton} href = {nav}>{navTo}</Link>
    )
}

/*
    parameters: children: the NavButton components (see above)
*/
export const NavButtonContainer = ({children}: {children: React.ReactNode}) => {
    return (
        <div className = {style.NavContainer}>
            {children}
        </div>
    )
}