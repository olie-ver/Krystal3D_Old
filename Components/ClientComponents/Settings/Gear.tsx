"use client";;
import Image from "next/image";
import { useTheme } from "@/Components/ClientComponents/ThemeContext";
import style from "./Settings.module.css";

import type { JSX } from "react";

/*
    Parameters: src: the theme of the gear's image (LightMode, DarkMode, DarkerMode, Midnight)
*/
export const Gear = ():JSX.Element => {
    const { theme } = useTheme();
    return (
        <div className = {style.GearBox}>
            <Image
                className = {style.Gear}
                src = {`/SVGs/${theme}/Gear.svg`}
                alt = "Settings Button"
                fill
                data-img>
            </Image>
        </div>
    )
}