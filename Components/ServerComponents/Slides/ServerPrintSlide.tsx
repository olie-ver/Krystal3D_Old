"use server";

import { PrintSlide } from "@/Components/ClientComponents/Previews/PrintSlide";
import { supabase } from "@/lib/supabase";

export default async function ServerPrintSlide({print}: {print: string}) {
    const images = await getImages(print);
    const model = supabase.storage.from(`print-assets/${print}`).getPublicUrl(`${print}.glb`).data.publicUrl;
    const models = {name: print.replaceAll(" ", "_"), path: model}

    return <PrintSlide initSrc = {images[0]} propModels={[models]} images = {images}/>
}

async function getImages(print: string) {
    const {data: files, error} = await supabase.storage.from("print-assets").list(`images/${print}`);
    if (error) {
        return [""];
    }
    return files.filter((file) => file.name.endsWith(".png"))
                .map((file) => {return supabase.storage.from(`print-assets/images/${print}`).getPublicUrl(file.name).data.publicUrl});
}