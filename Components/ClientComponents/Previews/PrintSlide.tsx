"use client";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { PrintCanvas } from "../../SceneCanvas";

import style from "./PreviewSkeleton.module.css";
import { PrintModel } from "@/Components/ServerComponents/Models/PrintModel";
import { Spinner } from "@/Components/Spinner";

type PrintSlideProps = {
  initSrc: string;
  images: string[];
  propModels: { path: string; name: string }[];
};

export function PrintSlide({ initSrc, images, propModels }: PrintSlideProps) {
  const [selectedImage, setSelectedImage] = useState(initSrc);
  const [displayButtons, setDisplayButtons] = useState(false);
  const [currentModel, setCurrentModel] = useState(0);

  // Sync selectedImage with new initSrc
  useEffect(() => {
    setSelectedImage(initSrc);
  }, [initSrc]);

  // Sync currentModel with new propModels
  useEffect(() => {
    setCurrentModel(0);
  }, []);

  return (
    <div className={style.PreviewDiv} key="PreviewContainer">
      <div className={style.SlideSkeleton} key="PreviewSlide">
        <Image
          id="Img"
          loading="lazy"
          style={{ display: displayButtons ? "block" : "none" }}
          src={selectedImage}
          alt=""
          fill
        />
        <div
          style={{
            display: displayButtons ? "none" : "block",
            width: "100%",
            height: "100%",
          }}
        >
          <PrintCanvas>
            <Suspense fallback={<Spinner />}>
              <PrintModel key={currentModel} model={propModels[currentModel]} />
            </Suspense>
          </PrintCanvas>
        </div>
      </div>
      <span style={{ display: "none" }} id="ModelViewer" />
    </div>
  );
}
