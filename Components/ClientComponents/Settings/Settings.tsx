"use client";
import Link from "next/link";
import { useTheme } from "@/Components/ClientComponents/ThemeContext";
import style from "./Settings.module.css";

/*
    Returns the settings menu that lets you adjust theme (light mode, dark mode, darker mode, midnight)
        and lets you visit the About Us and Contact Us pages
        Will soon have support for the Support Us button
*/
export const SettingMenu = () => {
    return (
        <div className = {style.SetContainer}>
            <div className = {style.SettingMenu}>
                <input type = "checkbox" className = {style.Setting} id ="Displays" style={{visibility: "hidden"}}></input>
                <label className = {style.Setting} htmlFor="Displays">Displays</label>
                <SubMenu id = "Brightness">
                    <Mode id = "Light Mode" type = "Brightness" value = {"LightMode"}/>
                    <Mode id = "Dark Mode" type = "Brightness" value = {"DarkMode"}/>
                    <Mode id = "Darker Mode" type = "Brightness" value = {"DarkerMode"}/>
                    <Mode id = "Midnight" type = "Brightness" value = {"Midnight"}/>
                </SubMenu>

                {/* <div className = {style.Setting} id = "Language"
                    onClick = {(_evt) => showMenu({id: "Lang"})}>Languages</div> */}
                {/* <SubMenu id = "Lang">
                </SubMenu> */}

                <UsPage id = "About Us" href = {"/AboutUs"}></UsPage>
                <UsPage id = "Contact Us" href = {"/ContactUs"}></UsPage>
                <UsPage id = "Support Us" href = {"/SupportUs"}></UsPage>
            </div>
        </div>
    )
}

/*
    Parameters: id: the unique id of what the submenu is for
                children: the items in the submenu
*/
export const SubMenu = ({id, children}: {id: string, children: React.ReactNode}) => {
    return (
        <div className = {style.SubMenu} id = {id}>
            {children}
        </div>
    )
}

/*
    Parameters: id: the id of the mode
                type: what kind of mode is it (theme vs language for example)
                value: what value the mode has and will use when clicked
*/
export const Mode = ({id, type, value}: {id: string, type: string, value: string}) => {
    const {setTheme} = useTheme();
    return (
        <button
            type = "button"
            onClick = {() => {
                localStorage.setItem("Theme", value);
                setTheme(value);
            }}
            className = {style.Mode}
            id = {id}
            data-type = {type}>
            {id}
        </button>
    )
}

/*
    Parameters: id: the id of the link
                href: where the link will take you
*/
export const UsPage = ({id, href}: {id: string, href: string}) => {
    return (
        <Link className={style.Setting} id={id} href = {href}>{id}</Link>
    )
}