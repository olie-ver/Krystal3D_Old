"use client";

import { TopBanner } from "@/Components/ClientComponents/TopBanner/TopBanner";
import { Gear } from "@/Components/ClientComponents/Settings/Gear";
import { SettingMenu } from "@/Components/ClientComponents/Settings/Settings";
import { ModelDetails } from "@/Components/ClientComponents/Details/ModelDetails";

import style from "@/Components/ClientComponents/Settings/Settings.module.css";
import { PreviewSlideSkeleton } from "@/Components/ClientComponents/Previews/PreviewSkeleton";
import { Suspense } from "react";

export default function ModelPreview({
  title,
  modelDownload,
  materialDownload,
  suggestions,
  children,
}: {
  title: string;
  modelDownload: string[];
  materialDownload: string[];
  suggestions: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <ModelDetails
        title={title}
        suggestions={suggestions}
        modelDownload={modelDownload}
        materialDownload={materialDownload}
      ></ModelDetails>
      <Suspense fallback={<PreviewSlideSkeleton />}>{children}</Suspense>
      <input
        id="gear"
        type="checkbox"
        className={style.GearCheck}
        aria-label="Show Or Hide Sidebar"
      />
      <SettingMenu />
      <Gear />
      <TopBanner homeMode={true} backHref="/Models" />
    </>
  );
}
