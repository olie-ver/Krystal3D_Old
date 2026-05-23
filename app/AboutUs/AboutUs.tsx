"use client";

import { TopBanner } from "@/Components/ClientComponents/TopBanner/TopBanner";
import { Gear } from "@/Components/ClientComponents/Settings/Gear";
import { SettingMenu } from "@/Components/ClientComponents/Settings/Settings";
import { Logo } from "@/Components/ClientComponents/Logo/Logo";

import style from "@/Components/ClientComponents/Settings/Settings.module.css";
import style2 from "./AboutUs.module.css";
import style3 from "@/Components/ClientComponents/Logo/Logo.module.css";

export default function AboutUs({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Logo text="About Us" />
      <main>
        <p className={style2.Text}>
          {`Krystal is all about minimality and ease of use. We strive to create quality assets
                        that work straight out of the box, that are easy to modify for your own use. We believe
                        that tools like these should be free, easily distributable, no strings attached. Because
                        of this, we don't put invasive ads, ask for your email or any other information on our site,
                        track you, or charge you for anything on this site because no one likes that. Thank you for
                        visiting Krystal and reading this. We try to release new assets every week, so we hope to
                        see you again!`}
        </p>
        <p className={style3.KrystalTxt}>Our Team</p>
        <div className={style2.Container}>{children}</div>
      </main>
      <input id="gear" type="checkbox" className={style.GearCheck} />
      <SettingMenu />
      <Gear />
      <TopBanner homeMode={true} />
    </>
  );
}
