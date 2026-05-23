import getDownloads from "@/Components/ServerComponents/Downloads/PrintDownloads";
import PrintPreview from "./PrintPreview";
import ServerPrintSlide from "@/Components/ServerComponents/Slides/ServerPrintSlide";

import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function Page(props: { searchParams: { print: string } }) {
  const searchParams = props.searchParams;
  if (!(await checkValidPrint(searchParams.print))) {
    redirect("/404?inv=Print");
  }

  const download = await getDownloads(searchParams.print);

  return (
    <PrintPreview title={searchParams.print} download={download}>
      <ServerPrintSlide print={searchParams.print} />
    </PrintPreview>
  );
}

async function checkValidPrint(print: string) {
  const { data: files, error } = await supabase.storage
    .from("print-assets")
    .list("icons");
  if (error) {
    return false;
  }
  return files
    .filter((file) => file.name.endsWith(".png"))
    .map((file) => file.name)
    .includes(`${print}.png`);
}
