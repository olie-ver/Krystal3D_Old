"use client";

import JSZip from "jszip";
import Link from "next/link";
import { useState } from "react";

import style from "./MaterialDetails.module.css";
import style2 from "../ItemSelects/ItemSkeletons.module.css";
import style3 from "./TextureDetails.module.css";

type TextureDetails = {
  title: string;
  mat: string;
  downloads: string[];
  suggestions: React.ReactNode;
};
const resolutions = ["1k", "2k", "3k", "4k"];

export const TextureDetails = ({
  title,
  downloads,
  mat,
  suggestions,
}: TextureDetails) => {
  const [selected, setSelected] = useState("1k");
  const zip = new JSZip();

  async function createTextureZip() {
    const href = downloads[resolutions.indexOf(selected)];

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
    link.download = `${title + selected}.zip`;
    link.click();
    link.remove();
  }

  return (
    <div className={style.PreviewDetails}>
      <div className={style.TextHold}>{title}</div>
      <br />
      <br />
      <div className={style2.SuggestionBannerSkeleton} id="MadeWithMat">
        <div className={style3.Container}>
          <p className={style3.Text}>Resolution: {selected}</p>
          <div className={style3.Grid}>
            {resolutions.map((res) => (
              <button
                key={res}
                className={`${style3.Button} ${
                  selected === res ? style3.Active : ""
                }`}
                onClick={() => setSelected(res)}
              >
                {res}
              </button>
            ))}
          </div>
        </div>

        <p className={style3.Link}>{`Not What You're Looking For?`}</p>
        <Link
          className={style3.MaterialLink}
          href={{ pathname: "/Materials/MaterialPreview", query: { mat: mat } }}
        >
          Go To Material
        </Link>
      </div>
      <p className={style.MatName} id="Suggest">
        You May Also Like:
      </p>
      <div className={style2.SuggestionBanner}>{suggestions}</div>
      <p className={style.FileType}>File Type: .zip</p>
      <button className={style.MatDownload} onClick={() => createTextureZip()}>
        Download
      </button>
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
