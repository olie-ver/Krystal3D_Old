import { redirect } from "next/navigation";
import ModelPreview from "./ModelPreview";
import ModSlide from "@/Components/ServerComponents/Slides/ModelSlide";
import { supabase } from "@/lib/supabase";
import getDownloads from "@/Components/ServerComponents/Downloads/ModelDownloads";
import ModelSuggestions from "@/Components/ServerComponents/Suggestions/ModelSuggestions";

export default async function Page(props: {
  searchParams: { model: string; pack: string };
}) {
  const searchParams = props.searchParams;
  if (!(await validateModel(searchParams.model, searchParams.pack))) {
    redirect("/404?inv=Model");
  }

  const { model, material } = await getDownloads(
    searchParams.model,
    searchParams.pack
  );

  return (
    <ModelPreview
      title={searchParams.model}
      modelDownload={model}
      materialDownload={material}
      suggestions={
        <ModelSuggestions
          model={searchParams.model}
          pack={searchParams.pack}
        ></ModelSuggestions>
      }
    >
      <ModSlide model={searchParams.model} pack={searchParams.pack} />
    </ModelPreview>
  );
}

async function validateModel(model: string, pack: string) {
  const { data: files, error } = await supabase.storage
    .from("model-assets")
    .list(`icons/${pack}`);
  if (error) {
    return false;
  }
  return files
    .filter((file) => file.name.endsWith(".png"))
    .map((file) => file.name)
    .includes(`${model}.png`);
}
