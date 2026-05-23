"use server"

import { ItemSelect } from "@/Components/ClientComponents/ItemSelects/ItemSelect";
import { supabase } from "@/lib/supabase";


export default async function TextureSuggestions({txr, mat}: {txr: string, mat:string}) {
    const { data: icons, error } = await supabase.storage.from("texture-assets").list(`icons/${mat}`);

    if (error) {
        return <></>
    }

    let iconsData = icons?.filter((file) => file.name.endsWith(".png") && file.name.slice(0, -4) != txr)
                        .map((file) => {
                            const publicUrlData = supabase.storage.from(`texture-assets/icons/${mat}`).getPublicUrl(file.name);
                            return {title: file.name.slice(0, -4), src: publicUrlData.data.publicUrl,
                                    href: `/Materials/TexturePreview?txr=${file.name.slice(0, -4)}&mat=${mat}`}
                        });

    // console.log(iconsData);
    return createSuggestions(iconsData);
}

function createSuggestions(textures: {title: string, src: string, href: string}[]) {
    return textures.map((item) => (
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