import TexturePreview from "./TexturePreview";
import TextureSuggestions from "@/Components/ServerComponents/Suggestions/TextureSuggestions";
import TextureSlide from "@/Components/ServerComponents/Slides/TextureSlide";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import getDownloads from "@/Components/ServerComponents/Downloads/TextureDownloads";

export default async function Page(props: {
  searchParams: { mat: string; txr: string };
}) {
  const searchParams = props.searchParams;
  if (!(await checkValidTexture(searchParams.mat, searchParams.txr))) {
    redirect("/404?inv=Texture");
  }

  const downloads = await getDownloads(searchParams.txr);

  return (
    <TexturePreview
      mat={searchParams.mat}
      txr={searchParams.txr}
      suggestions={
        <TextureSuggestions mat={searchParams.mat} txr={searchParams.txr} />
      }
      downloads={downloads}
    >
      <TextureSlide txr={searchParams.txr} />
    </TexturePreview>
  );
}

async function checkValidTexture(mat: string, txr: string) {
  const { data: files, error } = await supabase.storage
    .from("texture-assets")
    .list(`icons/${mat}`);

  if (error) {
    return false;
  }

  let textures = files
    ?.filter((file) => file.name.endsWith(".png"))
    .map((file) => file.name);

  return textures.includes(`${txr}.png`);
}
