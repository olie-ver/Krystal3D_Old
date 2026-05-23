import MaterialPreview from "./MaterialPreview";
import MaterialSlide from "@/Components/ServerComponents/Slides/MaterialSlide";
import MaterialMadeWith from "@/Components/ServerComponents/MaterialMadeWith";
import MaterialSuggestions from "@/Components/ServerComponents/Suggestions/MaterialSuggestions";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import getDownloads from "@/Components/ServerComponents/Downloads/MaterialDownloads";

export default async function Page(props: { searchParams: { mat: string } }) {
  const searchParams = props.searchParams;
  if (!(await checkValidMaterial(searchParams.mat))) {
    redirect("/404?inv=Material");
  }

  const downloads = await getDownloads(searchParams.mat);

  return (
    <MaterialPreview
      mat={searchParams.mat}
      madeWith={<MaterialMadeWith mat={searchParams.mat} />}
      suggestions={<MaterialSuggestions mat={searchParams.mat} />}
      download={downloads}
    >
      <MaterialSlide mat={searchParams.mat} />
    </MaterialPreview>
  );
}

async function checkValidMaterial(mat: string) {
  const { data: files, error } = await supabase.storage
    .from("material-assets")
    .list("icons");

  if (error) {
    return false;
  }

  const iconData = files
    ?.filter((file) => file.name.endsWith(".png"))
    .map((file) => file.name);

  return iconData?.includes(`${mat}.png`);
}
