"use client";

import Link from "next/link";
import Image from "next/image";
import style from "./HomeButton.module.css";
import { useTheme } from "../ThemeContext";

/*
    Parameters: src: an optional boolean that says whether or not to render the home button
*/
export const HomeButton = ({src}: {src?: boolean}) => {
    const { theme } = useTheme();
    return src ?
        <Link href = "/">
            <div className = {style.Home}>
                <Image
                    src = {`/SVGs/${theme}/Home.svg`}
                    alt = "Back to Home Page"
                    style = {{display: "inline-block"}}
                    fill
                    data-img>
                </Image>
            </div>
        </Link> : <></>
}