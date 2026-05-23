// Also called Home page
"use client";
import { TopBanner } from "@/Components/ClientComponents/TopBanner/TopBanner";
import { Gear } from "@/Components/ClientComponents/Settings/Gear";
import { Logo } from "@/Components/ClientComponents/Logo/Logo";
import {
  NavButtonContainer,
  NavButton,
} from "@/Components/ClientComponents/NavButton/NavButton";
import { SettingMenu } from "@/Components/ClientComponents/Settings/Settings";
import style from "@/Components/ClientComponents/Settings/Settings.module.css";

export default function Page() {
  return (
    <>
      <Logo text="Krystal" />
      <NavButtonContainer>
        <NavButton navTo={"Browse"} nav={"/Browse"} />
        <NavButton navTo={"3D Models"} nav={"/Models"} />
        <NavButton navTo={"Materials"} nav={"/Materials"} />
        <NavButton navTo={"Prints"} nav={"/Prints"} />
      </NavButtonContainer>
      <input
        id="gear"
        type="checkbox"
        className={style.GearCheck}
        aria-label="Show Or Hide Sidebar"
      />
      <SettingMenu />
      <Gear />
      <TopBanner />
    </>
  );
}
