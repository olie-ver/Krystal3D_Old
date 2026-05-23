"use server";

import { ItemSelect } from "@/Components/ClientComponents/ItemSelects/ItemSelect";
import { supabase } from "@/lib/supabase";

export default async function MaterialSuggestions({
  mat,
}: {
  mat: string;
}): Promise<JSX.Element[]> {
  const { data: files, error } = await supabase.storage
    .from("material-assets")
    .list("icons");

  if (!files || files.length === 0 || error) {
    return [<></>];
  }

  const iconData = files
    ?.filter(
      (file) => file.name.endsWith(".png") && file.name.slice(0, -4) != mat
    )
    .map((file) => {
      const publicUrlData = supabase.storage
        .from("material-assets/icons")
        .getPublicUrl(file.name);
      return {
        title: file.name.slice(0, -4),
        src: publicUrlData.data.publicUrl,
        href: `/Materials/MaterialPreview?mat=${file.name.slice(0, -4)}`,
      };
    });

  return createSuggestions(iconData);
}

function createSuggestions(
  suggestions: { title: string; src: string; href: string }[]
) {
  return suggestions.map((item) => (
    <ItemSelect
      key={item.title}
      src={item.src}
      title={item.title}
      alt=""
      href={item.href}
      prefetch={true}
    />
  ));
}
