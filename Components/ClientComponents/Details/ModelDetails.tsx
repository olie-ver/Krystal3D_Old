"use client";
import { useState } from "react";
import JSZip from "jszip";

const modelTypes = [".obj", ".glb", ".fbx", ".blend"];
const polyCount = ["Low", "Mid", "High"];

import style from "./MaterialDetails.module.css";
import style2 from "../ItemSelects/ItemSkeletons.module.css";
import style3 from "./TextureDetails.module.css";
import style4 from "./ModelDetails.module.css";

type ModelDetails = {
  title: string;
  modelDownload: string[];
  materialDownload: string[];
  suggestions: React.ReactNode;
};
export const ModelDetails = ({
  title,
  modelDownload,
  materialDownload,
  suggestions,
}: ModelDetails) => {
  const [selected, setSelected] = useState(".obj");
  const [poly, setPoly] = useState("Low");

  const zip = new JSZip();

  async function createModelZip() {
    const href =
      selected == ".blend"
        ? modelDownload[
            modelDownload.findIndex((val) => val.includes(".blend"))
          ]
        : modelDownload[
            modelDownload.findIndex((val) =>
              val.includes(`${poly}Poly${selected}`)
            )
          ];
    const [response, licenseResponse] = await Promise.all([
      fetch(href),
      fetch("/LICENSE.txt"),
    ]);
    const [blob, licenseBlob] = await Promise.all([
      response.blob(),
      licenseResponse.blob(),
    ]);

    let filename = decodeURIComponent(
      href.split("/").pop()?.split("?")[0] || ""
    );

    zip.file(filename, blob);
    zip.file("LICENSE.txt", licenseBlob);
    const zipData = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(zipData);
    link.download = `${poly + "Poly " + title + selected}.zip`;
    link.click();
    link.remove();
  }

  async function createMaterialZip() {
    const href =
      materialDownload[
        materialDownload.findIndex((val) =>
          val.includes(`${poly}PolyMaterial.zip`)
        )
      ];

    const [response, licenseResponse] = await Promise.all([
      fetch(href),
      fetch("/LICENSE.txt"),
    ]);
    const [blob, licenseBlob] = await Promise.all([
      response.blob(),
      licenseResponse.blob(),
    ]);

    let filename = decodeURIComponent(
      href.split("/").pop()?.split("?")[0] || ""
    );

    zip.file(filename, blob);
    zip.file("LICENSE.txt", licenseBlob);

    const zipData = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(zipData);
    link.download = `${poly + "Poly " + title + " Material"}.zip`;
    link.click();
    link.remove();
  }

  return (
    <div className={style.PreviewDetails}>
      <div className={style.TextHold}>{title}</div>
      <br />
      <br />
      <div className={style4.SuggestionBanner} id="MadeWithMat">
        <div className={style4.Container}>
          <p className={style3.Text}>Model Type: {selected}</p>
          <div className={style3.Grid}>
            {modelTypes.map((file) => (
              <button
                key={file}
                className={`${style3.Button} ${
                  selected === file ? style3.Active : ""
                }`}
                onClick={() => setSelected(file)}
              >
                {file}
              </button>
            ))}
          </div>
        </div>

        <div className={`${style4.Container} ${style3.ThreeButtons}`}>
          <p className={style3.Text}>Poly Count: {poly}</p>
          <div className={style3.Grid}>
            {polyCount.map((polyCount) => (
              <button
                key={polyCount}
                className={`${style3.Button} ${
                  poly === polyCount ? style3.Active : ""
                }`}
                onClick={() => setPoly(polyCount)}
              >
                {polyCount}
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className={style.MatName} id="Suggest">
        You May Also Like:
      </p>
      <div className={style2.SuggestionBanner}>{suggestions}</div>
      <div className={style4.DownloadContainer}>
        <button className={style4.Download} onClick={() => createModelZip()}>
          Download Model
        </button>
        <button className={style4.Download} onClick={() => createMaterialZip()}>
          Download Material
        </button>
      </div>
      <p className={style.License}>
        © 2025{" "}
        <a className={style.CC} href="https://creativecommons.org">
          Krystal
        </a>{" "}
        is licensed under
        <a
          className={style.CC}
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          {" "}
          CC BY-NC-SA 4.0
        </a>
      </p>
    </div>
  );
};
