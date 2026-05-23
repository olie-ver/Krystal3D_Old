"use server";
import InternalServerError from "@/app/500";
import {
  ItemSelect,
  ItemMenu,
} from "@/Components/ClientComponents/ItemSelects/ItemSelect";
import { supabase } from "@/lib/supabase";

export default async function TextureItems() {
  const { data: files, error } = await supabase.storage
    .from("texture-assets")
    .list("icons");
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

  let iconsData = [];

  for (let i = 0; i < files.length; i++) {
    const { data: icons, error } = await supabase.storage
      .from("texture-assets")
      .list(`icons/${files[i].name}`);
    let onlyIcons = icons
      ?.filter((file) => file.name.endsWith(".png"))
      .map((file) => {
        const publicUrlData = supabase.storage
          .from(`texture-assets/icons/${files[i].name}`)
          .getPublicUrl(file.name);
        return {
          title: file.name.slice(0, -4),
          src: publicUrlData.data.publicUrl,
          href: `/Materials/TexturePreview?txr=${file.name.slice(0, -4)}&mat=${
            files[i].name
          }`,
        };
      });

    if (onlyIcons) {
      iconsData.push(...onlyIcons);
    }
  }

  // console.log(iconsData);

  return <ItemMenu>{createItems(iconsData)}</ItemMenu>;
}

/*
  Parameters: title: the displayed title of the item being displayed
              src: the image source
              href: the link that clicking on the item will take you to
  Turns all the parameters into an ItemSelect DOM element
*/
function createItems(items: { title: string; src: string; href: string }[]) {
  return items.map((item) => (
    <ItemSelect
      key={item.title}
      src={item.src}
      href={item.href}
      title={item.title}
      alt=""
      prefetch={true}
    />
  ));
}
