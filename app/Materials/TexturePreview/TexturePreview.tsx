"use client";
import { TopBanner } from "@/Components/ClientComponents/TopBanner/TopBanner";
import { Gear } from "@/Components/ClientComponents/Settings/Gear";
import { SettingMenu } from "@/Components/ClientComponents/Settings/Settings";
import { TextureDetails } from "@/Components/ClientComponents/Details/TextureDetails";
import { PreviewSlideSkeleton } from "@/Components/ClientComponents/Previews/PreviewSkeleton";
import { Suspense } from "react";

import style from "@/Components/ClientComponents/Settings/Settings.module.css";

export default function TexturePreview({
  txr,
  mat,
  downloads,
  suggestions,
  children,
}: {
  txr: string;
  mat: string;
  downloads: string[];
  suggestions: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <TextureDetails
        title={txr}
        mat={mat}
        suggestions={suggestions}
        downloads={downloads}
      />
      <Suspense fallback={<PreviewSlideSkeleton />}>{children}</Suspense>
      <input
        id="gear"
        type="checkbox"
        className={style.GearCheck}
        aria-label="Show Or Hide Sidebar"
      />
      <SettingMenu />
      <Gear />
      <TopBanner homeMode={true} backHref="/Materials" />
    </>
  );
}
