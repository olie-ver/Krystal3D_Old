"use server";

import { ModelSlide } from "@/Components/ClientComponents/Previews/ModelSlide";
import { supabase } from "@/lib/supabase";

export default async function ModSlide({
  model,
  pack,
}: {
  model: string;
  pack: string;
}) {
  const images = await getImages(model, pack);

  const models = [
    {
      path: supabase.storage
        .from(`model-assets/${pack}/${model}`)
        .getPublicUrl("HighPoly.glb").data.publicUrl,
      name: "High_Poly",
    },
    {
      path: supabase.storage
        .from(`model-assets/${pack}/${model}`)
        .getPublicUrl("MidPoly.glb").data.publicUrl,
      name: "Mid_Poly",
    },
    {
      path: supabase.storage
        .from(`model-assets/${pack}/${model}`)
        .getPublicUrl("LowPoly.glb").data.publicUrl,
      name: "Low_Poly",
    },
  ];

  return <ModelSlide initSrc={images[0]} propModels={models} images={images} />;
}

async function getImages(model: string, pack: string) {
  const { data: files, error } = await supabase.storage
    .from("model-assets")
    .list(`images/${pack}/${model}`);
  if (error) {
    return [""];
  }

  return files
    .filter((file) => file.name.endsWith(".png"))
    .map((file) => {
      return supabase.storage
        .from(`model-assets/images/${pack}/${model}`)
        .getPublicUrl(file.name).data.publicUrl;
    });
}
