"use client";

import Link from "next/link";
import Image from "next/image";
import style from "./BackButton.module.css";
import { useTheme } from "../ThemeContext";

/*
    Parameters: href: the link that the back button will take you to
                      if no href is provided, then the back button will not render
*/
export const BackButton = ({href}: {href?: string}) => {
    const { theme } = useTheme();
    return href ?
            <Link href = {href} replace={true}>
                 <div className = {style.Back}>
                     <Image
                         src = {`/SVGs/${theme}/Back.svg`}
                         alt = "Back to previous page"
                         style = {{display: "block"}}
                         fill
                         data-img>
                     </Image>
                 </div>
             </Link>
            :
            <></>
}