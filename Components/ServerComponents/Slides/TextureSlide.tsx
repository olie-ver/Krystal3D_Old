"use server";

import { TxrSlide } from "@/Components/ClientComponents/Previews/TextureSlide";
import { supabase } from "@/lib/supabase";

export default async function TextureSlide({txr}: {txr: string}) {
    const images = await getImages(txr);
    const models = await getModels();
    const texture = await getMaps(txr);

    return <TxrSlide images={images} initSrc={images[0]} texture={texture} propModels={models}></TxrSlide>
}

async function getImages(txr: string) {
    const { data: files, error } = await supabase.storage.from("texture-assets").list(`images/${txr}`);
    if (error) {
        return [];
    }

    let images = files?.filter((file) => file.name.endsWith(".png"))
                   .map((file) => {
                        return supabase.storage.from(`texture-assets/images/${txr}`).getPublicUrl(file.name).data.publicUrl;
                    });

    return images;
}

async function getModels() {
    const {data: files, error} = await supabase.storage.from("texture-assets").list("standard-models");
    if (error) {
        return [];
    }

    let models = files?.filter((file) => file.name.endsWith(".glb"))
                       .map((file) => { return {name: file.name.slice(0, -4),
                        path: supabase.storage.from("texture-assets/standard-models").getPublicUrl(file.name).data.publicUrl}
                    });

    return models;
}

async function getMaps(txr: string) {
    const {data: files, error} = await supabase.storage.from("texture-assets").list(`maps/${txr}`);
    if (error) {
        return  {alpha: "", ao: "", color: "", displacement: "", emissive: "", metalness: "", normal: "", roughness: ""};
    }

    let maps = files.filter((file) => file.name.endsWith(".png")).map((file) => file.name);

    let texture = {
        alpha: maps.includes("Alpha.png") ?
                supabase.storage.from(`texture-assets/maps/${txr}`).getPublicUrl("Alpha.png").data.publicUrl : "/NullImg.png",
        ao: maps.includes("AO.png") ?
                supabase.storage.from(`texture-assets/maps/${txr}`).getPublicUrl("AO.png").data.publicUrl : "/NullImg.png",
        color: maps.includes("Color.png") ?
                supabase.storage.from(`texture-assets/maps/${txr}`).getPublicUrl("Color.png").data.publicUrl : "/NullImg.png",
        displacement: maps.includes("Displacement.png") ?
                supabase.storage.from(`texture-assets/maps/${txr}`).getPublicUrl("Displacement.png").data.publicUrl : "/NullImg.png",
        emissive: maps.includes("Emissive.png") ?
                supabase.storage.from(`texture-assets/maps/${txr}`).getPublicUrl("Emissive.png").data.publicUrl : "/NullImg.png",
        metalness: maps.includes("Metalness.png") ?
                supabase.storage.from(`texture-assets/maps/${txr}`).getPublicUrl("Metalness.png").data.publicUrl : "/NullImg.png",
        normal: maps.includes("Normal.png") ?
                supabase.storage.from(`texture-assets/maps/${txr}`).getPublicUrl("Normal.png").data.publicUrl : "/NullImg.png",
        roughness: maps.includes("Roughness.png") ?
                supabase.storage.from(`texture-assets/maps/${txr}`).getPublicUrl("Roughness.png").data.publicUrl : "/NullImg.png",
    }
    return texture;
}