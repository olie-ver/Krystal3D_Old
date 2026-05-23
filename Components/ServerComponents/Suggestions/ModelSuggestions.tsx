"use server";

import { ItemSelect } from "@/Components/ClientComponents/ItemSelects/ItemSelect";
import { supabase } from "@/lib/supabase";

export default async function ModelSuggestions({
  model,
  pack,
}: {
  model: string;
  pack: string;
}): Promise<JSX.Element[]> {
  const { data, error } = await supabase
    .from("model_icons")
    .select("*")
    .eq("pack", `icons/${pack}`);

  if (!data || data.length === 0 || error) {
    return [<></>];
  }

  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  const iconsData = data.filter(
    (file) => file.name.slice(0, -4) != model && data.indexOf(file) < 8
  );

  return createSuggestions(iconsData);
}

function createSuggestions(
  suggestions: { id: string; pack: string; name: string; path: string }[]
) {
  return suggestions.map((item) => (
    <ItemSelect
      key={item.id}
      src={
        supabase.storage
          .from(`model-assets/${item.pack}`)
          .getPublicUrl(item.name).data.publicUrl
      }
      title={item.name.slice(0, -4)}
      alt=""
      href={`/Models/ModelPreview?model=${item.name.slice(
        0,
        -4
      )}&pack=${item.pack.slice(6)}`}
      prefetch={true}
    />
  ));
}
