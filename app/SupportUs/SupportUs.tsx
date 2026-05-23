"use client";

import { TopBanner } from "@/Components/ClientComponents/TopBanner/TopBanner";
import { Gear } from "@/Components/ClientComponents/Settings/Gear";
import { SettingMenu } from "@/Components/ClientComponents/Settings/Settings";
import { Logo } from "@/Components/ClientComponents/Logo/Logo";
import DonationForm from "./DonationForm";

import style from "@/Components/ClientComponents/Settings/Settings.module.css";
import style2 from "../AboutUs/AboutUs.module.css";

export default function SupportUs() {
  return (
    <>
      <Logo text="Support Us" />
      <main>
        <p className={style2.Text}>
          {`Thank you so much for considering to donate to Krystal. They say that
            money is time and time is exactly what we need. When you donate, no matter how much,
            you are giving us time to create and time to work. We gain more time to host our site,
            more time to find talent, and time to grow. We're very thankful for the time you've given
            us just by reading this. Thank you for your support and for believing in us!`}
          <br />
          <br />
          {`Currently, we need money to upgrade our database plan so we can continue adding more assets
            to our website.`}
        </p>
        <DonationForm />
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
