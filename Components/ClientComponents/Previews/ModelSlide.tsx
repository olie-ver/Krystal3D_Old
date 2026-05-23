"use client";
import { useState, useEffect, Dispatch, SetStateAction, Suspense } from "react";
import Image from "next/image";
import { SceneCanvas } from "../../SceneCanvas";

import style from "./PreviewSkeleton.module.css";
import {
  ImageButton,
  ModelButton,
  Toggle2D3D,
} from "../ImageButtons/ImageButton";
import { Model } from "@/Components/ServerComponents/Models/Model";
import { Spinner } from "@/Components/Spinner";

type ModelSlideProps = {
  initSrc: string;
  images: string[];
  propModels: { path: string; name: string }[];
};

export function ModelSlide({ initSrc, images, propModels }: ModelSlideProps) {
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
          loading="eager"
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
          <SceneCanvas>
            <Suspense fallback={<Spinner />}>
              <Model key={currentModel} model={propModels[currentModel]} />
            </Suspense>
          </SceneCanvas>
        </div>
      </div>
      <span style={{ display: "none" }} id="ModelViewer" />
      <div className={style.ButtonBox} key="ButtonBox">
        <MakeImageButtons
          display={displayButtons}
          images={images}
          onSelect={setSelectedImage}
        />
        <MakeModelButtons
          models={propModels}
          display={displayButtons}
          onSelect={setCurrentModel}
        />
        <Toggle2D3D current={displayButtons} onClick={setDisplayButtons} />
      </div>
    </div>
  );
}

function MakeImageButtons({
  images,
  display,
  onSelect,
}: {
  images: string[];
  display: boolean;
  onSelect: Dispatch<SetStateAction<string>>;
}) {
  return images.map((item) => (
    <ImageButton
      display={display}
      key={images.indexOf(item)}
      src={item}
      index={images.indexOf(item)}
      onSelect={onSelect}
    />
  ));
}

function MakeModelButtons({
  models,
  display,
  onSelect,
}: {
  models: { path: string; name: string }[];
  display: boolean;
  onSelect: Dispatch<SetStateAction<number>>;
}) {
  return models.map((item) => (
    <ModelButton
      key={models.indexOf(item)}
      index={models.indexOf(item)}
      onSelect={onSelect}
      model={models.indexOf(item)}
      display={!display}
    />
  ));
}
