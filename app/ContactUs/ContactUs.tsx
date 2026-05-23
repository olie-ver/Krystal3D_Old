"use client";

import { TopBanner } from "@/Components/ClientComponents/TopBanner/TopBanner";
import { Gear } from "@/Components/ClientComponents/Settings/Gear";
import { SettingMenu } from "@/Components/ClientComponents/Settings/Settings";
import { Logo } from "@/Components/ClientComponents/Logo/Logo";
import ContactForm from "./ContactForm";

import style from "@/Components/ClientComponents/Settings/Settings.module.css";
import style2 from "../AboutUs/AboutUs.module.css";
import style3 from "@/Components/ClientComponents/Logo/Logo.module.css";
import style4 from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <>
      <Logo text="Contact Us" />
      <main>
        <p className={style2.Text}>
          {`Hi! Please use the form below to contact us (please no spam).
                        If there's a bug, please include:`}
          <br />
          <span className={style4.List}> &bull; What the bug is</span>
          <br />
          <span className={style4.List}> &bull; What page it happened on</span>
          <br />
          <span className={style4.List}>
            {" "}
            &bull; How you discovered the bug
          </span>
          <br />
          <span className={style4.List}> &bull; What device you are using</span>
          <br />
          <br />
          {`If you'd like to request a feature, please include:`}
          <br />
          <span className={style4.List}> &bull; What feature you want</span>
          <br />
          <span className={style4.List}>
            {" "}
            &bull; Why you think it would be a good feature
          </span>
          <br />
          <br />
          {`If you'd like to request a model, material, or print, please include:`}
          <br />
          <span className={style4.List}>
            {" "}
            &bull; What kind of asset you want
          </span>
          <br />
          <span className={style4.List}> &bull; How you visualize it</span>
          <br />
          <span className={style4.List}>
            {" "}
            &bull; Is it a private commission? Or should it be publicly
            released?
          </span>
          <br />
          <br />
          For anything else, please include as much detail as you can, we will
          read it all!
          <br />
          If the form does not work, please email: oliverlie@krsytal3d.com
          <br />
        </p>
        <p className={style3.KrystalTxt}>Contact Form</p>
        <ContactForm />
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
