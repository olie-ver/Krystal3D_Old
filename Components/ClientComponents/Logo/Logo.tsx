import Image from "next/image";
import style from "./Logo.module.css";
import { useTheme } from "@/Components/ClientComponents/ThemeContext";

/*
    Parameters: src: the theme of the image
                text: the text that goes next to the logo
*/
export const Logo = ({text}: {text: string}) => {
    const { theme } = useTheme();
    return (
        <div className = {style.Logo}>
            <p className = {style.KrystalTxt}>{text}</p>
            <Image className = {style.Krystal}
                src = {`/SVGs/${theme}/Krystal.svg`}
                alt = "Krystal Symbol"
                fill
                priority
                data-img>
            </Image>
        </div>
    )
}