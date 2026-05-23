"use client";

import { Gear } from "@/Components/ClientComponents/Settings/Gear";
import { SettingMenu } from "@/Components/ClientComponents/Settings/Settings";
import { TopBanner } from "@/Components/ClientComponents/TopBanner/TopBanner";
import { Suspense } from "react";
import { PreviewSlideSkeleton } from "@/Components/ClientComponents/Previews/PreviewSkeleton";
import { MaterialDetails } from "@/Components/ClientComponents/Details/MaterialDetails";

import style from "@/Components/ClientComponents/Settings/Settings.module.css";

export default function MaterialPreview({
  mat,
  madeWith,
  download,
  suggestions,
  children,
}: {
  mat: string;
  download: string;
  suggestions: React.ReactNode;
  madeWith: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <MaterialDetails
        title={mat}
        madeWith={madeWith}
        suggestions={suggestions}
        download={download}
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
