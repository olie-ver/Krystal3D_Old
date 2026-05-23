"use server"

import { Gear } from "@/Components/ClientComponents/Settings/Gear";
import { NavButtonContainer, NavButton } from "@/Components/ClientComponents/NavButton/NavButton";
import { SettingMenu } from "@/Components/ClientComponents/Settings/Settings";
import { TopBanner } from "@/Components/ClientComponents/TopBanner/TopBanner";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function NotFound({searchParams}: {searchParams?: {inv? : string}}) {
    const theme = (await cookies()).get("Theme")?.value ?? "DarkMode";

    return (
        <>
            <div style = {{width: "100vw", height: "100vh", display: "flex",
                justifyContent: "center", position: "fixed", alignItems:"center"}}>
                <div style = {{width: "25vw", height: "25vw", position: "fixed"}}>
                    <Image
                        src = {`/SVGs/${theme}/404.svg`}
                        id = "404"
                        fill
                        alt = "404 Image"
                        data-img
                        priority>
                    </Image>
                </div>
                <h4 style = {{top: "75vh", position: "fixed", fontSize: "2.5vw",
                    fontFamily: "Tilt Prism", textAlign: "center", color: "var(--krystal-text)"}}>
                The {searchParams?.inv ? searchParams.inv : "page"} you are looking for cannot be found. <br/>
                We are sorry for the inconvenience!
                </h4>
                <NavButtonContainer>
                    <NavButton navTo = {"Browse"} nav = {"/Browse"}/>
                    <NavButton navTo = {"3D Models"} nav = {"/Models"}/>
                    <NavButton navTo = {"Materials"} nav = {"/Materials"}/>
                    <NavButton navTo = {"Prints"} nav = {"/Prints"}/>
                </NavButtonContainer>
                <SettingMenu/>
                <Gear/>
                <TopBanner/>
            </div>
        </>
    )
}