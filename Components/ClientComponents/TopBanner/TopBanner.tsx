"use client";;
import { HomeButton } from "./HomeButton";
import { BackButton } from "./BackButton";
import style from "./TopBanner.module.css";

import type { JSX } from "react";

/*
    Parameters: homeMode: an optional boolean that says whether or not to render the home button
                backMode: an optional boolean that says whether or not to render the back button
                backHref: the link that the back button will take you to
*/
export const TopBanner = ({homeMode, backHref}:
    {homeMode?: boolean, backHref?: string}): JSX.Element => {
        return (
            <header className = {style.TopBanner}>
                <HomeButton src = {homeMode}/>
                <BackButton href = {backHref}/>
            </header>
        )
}