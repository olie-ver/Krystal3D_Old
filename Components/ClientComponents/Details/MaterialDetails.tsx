"use client";

import JSZip from "jszip";
import style from "./MaterialDetails.module.css";
import style2 from "../ItemSelects/ItemSkeletons.module.css";

export const MaterialDetails = ({
  title,
  download,
  madeWith,
  suggestions,
}: {
  title: string;
  download: string;
  madeWith: React.ReactNode;
  suggestions: React.ReactNode;
}) => {
  const zip = new JSZip();

  async function createMaterialZip() {
    const [response, licenseResponse] = await Promise.all([
      fetch(download),
      fetch("/LICENSE.txt"),
    ]);

    const [blob, licenseBlob] = await Promise.all([
      response.blob(),
      licenseResponse.blob(),
    ]);

    let filename = decodeURIComponent(
      download.split("/").pop()?.split("?")[0] || ""
    );

    zip.file(filename, blob);
    zip.file("LICENSE.txt", licenseBlob);
    const zipData = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(zipData);
    link.download = `${title}.zip`;
    link.click();
    link.remove();
  }

  return (
    <div className={style.PreviewDetails}>
      <div className={style.TextHold}>{title}</div>
      <p className={style.MatName} id="MadeWith">
        Made With This Material:
      </p>
      <div className={style2.SuggestionBanner}>{madeWith}</div>
      <p className={style.MatName} id="Suggest">
        You May Also Like:
      </p>
      <div className={style2.SuggestionBanner}>{suggestions}</div>
      <p className={style.FileType}> File Type: .blend.zip</p>
      <button className={style.MatDownload} onClick={() => createMaterialZip()}>
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
