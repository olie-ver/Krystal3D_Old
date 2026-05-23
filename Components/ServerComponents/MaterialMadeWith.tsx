"use server";
import { promises as fs } from "fs";
import { ItemSelect } from "../ClientComponents/ItemSelects/ItemSelect";
import { supabase } from "@/lib/supabase";

export default async function MaterialMadeWith({mat}: {mat:string}): Promise<JSX.Element[]> {
    const { data: files, error } = await supabase.storage.from("texture-assets").list(`icons/${mat}`);

    if (!files || files.length === 0) {
      return [<></>];
    }

    const iconData = files?.filter((file) => file.name.endsWith(".png"))
                           .map((file) => {
                            const publicUrlData = supabase.storage.from(`texture-assets/icons/${mat}`).getPublicUrl(file.name);
                            return {title: file.name.slice(0, -4), src: publicUrlData.data.publicUrl,
                              href: `/Materials/TexturePreview?txr=${file.name.slice(0, -4)}&mat=${mat}`
                            }});

    return createMadeWith(iconData);
}

function createMadeWith(textures: {title: string, src: string, href: string}[]) {
    return textures.filter((item) => item.title != "").map((item) => (
        <ItemSelect
            src = {item.src}
            alt = ""
            href = {item.href}
            title= {item.title}
            key = {item.title}
            prefetch = {true}
        />
    ));
}