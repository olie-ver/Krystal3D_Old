"use client";
import { Logo } from "@/Components/ClientComponents/Logo/Logo";
import {
  NavButtonContainer,
  NavButton,
} from "@/Components/ClientComponents/NavButton/NavButton";
import { Gear } from "@/Components/ClientComponents/Settings/Gear";
import { SettingMenu } from "@/Components/ClientComponents/Settings/Settings";
import { TopBanner } from "@/Components/ClientComponents/TopBanner/TopBanner";
import { ItemMenuSkeleton } from "@/Components/ClientComponents/ItemSelects/ItemSkeletons";
import { Suspense } from "react";

import style from "@/Components/ClientComponents/Settings/Settings.module.css";

export default function Models({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Logo text="Models" />
      <NavButtonContainer>
        <NavButton navTo={"Browse"} nav={"/Browse"} />
        <NavButton navTo={"Materials"} nav={"/Materials"} />
        <NavButton navTo={"Prints"} nav={"/Prints"} />
      </NavButtonContainer>
      <main>
        <Suspense fallback={<ItemMenuSkeleton />}>{children}</Suspense>
      </main>
      <input
        id="gear"
        type="checkbox"
        className={style.GearCheck}
        aria-label="Show Or Hide Sidebar"
      />
      <SettingMenu />
      <Gear />
      <TopBanner homeMode={true} />
    </>
  );
}
