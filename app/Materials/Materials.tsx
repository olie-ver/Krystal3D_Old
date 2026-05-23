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
import style3 from "./Materials.module.css";

export default function Materials({
  materials,
  textures,
}: {
  materials: React.ReactNode;
  textures: React.ReactNode;
}) {
  return (
    <>
      <Logo text="Materials" />
      <NavButtonContainer>
        <NavButton navTo={"Browse"} nav={"/Browse"} />
        <NavButton navTo={"3D Models"} nav={"/Models"} />
        <NavButton navTo={"Prints"} nav={"/Prints"} />
      </NavButtonContainer>
      <main>
        <Suspense
          fallback={
            <div className={style3.MaterialContainer}>
              <ItemMenuSkeleton />
              <br />
              <p className={style3.KrystalTxt}>Seamless Textures</p>
              <ItemMenuSkeleton />
            </div>
          }
        >
          <div className={style3.MaterialContainer}>
            {materials}
            <br />
            <p className={style3.KrystalTxt}>Seamless Textures</p>
            {textures}
          </div>
        </Suspense>
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
