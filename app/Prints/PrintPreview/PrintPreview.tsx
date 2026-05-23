"use client";
import { TopBanner } from "@/Components/ClientComponents/TopBanner/TopBanner";
import { Gear } from "@/Components/ClientComponents/Settings/Gear";
import { SettingMenu } from "@/Components/ClientComponents/Settings/Settings";
import { Suspense } from "react";
import { PreviewSlideSkeleton } from "@/Components/ClientComponents/Previews/PreviewSkeleton";
import { PrintDetails } from "@/Components/ClientComponents/Details/PrintDetails";

import style from "@/Components/ClientComponents/Settings/Settings.module.css";

export default function PrintPreview({
  title,
  download,
  children,
}: {
  title: string;
  download: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PrintDetails
        title={title}
        download={download}
        suggestions={<></>}
      ></PrintDetails>
      <Suspense fallback={<PreviewSlideSkeleton />}>{children}</Suspense>
      <input
        id="gear"
        type="checkbox"
        className={style.GearCheck}
        aria-label="Show Or Hide Sidebar"
      />
      <SettingMenu />
      <Gear />
      <TopBanner homeMode={true} backHref="/Prints" />
    </>
  );
}
