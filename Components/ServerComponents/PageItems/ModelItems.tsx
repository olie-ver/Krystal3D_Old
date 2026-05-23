"use server";
import InternalServerError from "@/app/500";
import {
  ItemSelect,
  ItemMenu,
} from "@/Components/ClientComponents/ItemSelects/ItemSelect";
import { supabase } from "@/lib/supabase";

export default async function ModelItems() {
  const { data, error } = await supabase.from("model_icons").select("*");

  if (error) {
    console.error("Supabase storage list error:", error);
    return (
      <InternalServerError
        error={`The requested links couldn't be loaded.
        Please refresh or navigate to a different page.
        If this doesn't work, please contact us for more support.`}
      />
    );
  }

  return <ItemMenu>{createItems(data)}</ItemMenu>;
}

/*
  Parameters: title: the displayed title of the item being displayed
              src: the image source
              href: the link that clicking on the item will take you to
  Turns all the parameters into an ItemSelect DOM element
*/
function createItems(
  items: { id: string; pack: string; name: string; path: string }[]
) {
  return items.map((item) => (
    <ItemSelect
      key={item.id}
      src={
        supabase.storage
          .from(`model-assets/${item.pack}`)
          .getPublicUrl(item.name).data.publicUrl
      }
      href={`/Models/ModelPreview?model=${item.name.slice(
        0,
        -4
      )}&pack=${item.pack.slice(6)}`}
      title={item.name.slice(0, -4)}
      alt=""
      prefetch={true}
    />
  ));
}
