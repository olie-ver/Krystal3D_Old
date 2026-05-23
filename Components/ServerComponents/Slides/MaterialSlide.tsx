"use server";
import { MatSlide } from "@/Components/ClientComponents/Previews/MaterialSlide";

import { supabase } from "@/lib/supabase";

export default async function MaterialSlide({ mat }: { mat: string }) {
  const images = await getImages(mat);
  const models = await getModels(mat);
  const maps = await getMaps(mat, models);

  // console.log(images);
  // console.log(models);
  // console.log(maps);

  return <MatSlide initSrc={images[0]} propModels={maps} images={images} />;
}

async function getImages(mat: string) {
  const { data: files, error } = await supabase.storage
    .from("material-assets")
    .list(`images/${mat}`);

  if (error) {
    return [];
  }

  let images = files
    ?.filter((file) => file.name.endsWith(".png"))
    .map((file) => {
      return supabase.storage
        .from(`material-assets/images/${mat}`)
        .getPublicUrl(file.name).data.publicUrl;
    });

  return images;
}

async function getModels(mat: string) {
  const { data: files, error } = await supabase.storage
    .from("material-assets")
    .list(`maps/${mat}`);
  if (error) {
    return [];
  }
  let models = files
    ?.filter((file) => file.name.endsWith(".glb"))
    .map((file) => {
      return {
        name: file.name.slice(0, -4),
        path: supabase.storage
          .from(`material-assets/maps/${mat}`)
          .getPublicUrl(file.name).data.publicUrl,
      };
    });
  if (models.length < 3) {
    const { data: files, error } = await supabase.storage
      .from("material-assets")
      .list("standard-models");
    let standardModels = files
      ?.filter(
        (file) =>
          file.name.endsWith(".glb") && files.indexOf(file) < 3 - models.length
      )
      .map((file) => {
        return {
          name: file.name.slice(0, -4),
          path: supabase.storage
            .from("material-assets/standard-models")
            .getPublicUrl(file.name).data.publicUrl,
        };
      });
    if (standardModels) {
      models.push(...standardModels);
    }
  }

  return models;
}

async function getMaps(mat: string, models: { path: string; name: string }[]) {
  const { data: files, error } = await supabase.storage
    .from("material-assets")
    .list(`maps/${mat}`);
  if (error) {
    return [];
  }
  const mapTypes = files
    .filter((file) => !file.name.includes("."))
    .map((file) => file.name);
  let alphaCheck = mapTypes.includes("Alpha");
  let aoCheck = mapTypes.includes("AO");
  let colorCheck = mapTypes.includes("Color");
  let displacementCheck = mapTypes.includes("Displacement");
  let emissiveCheck = mapTypes.includes("Emissive");
  let metalnessCheck = mapTypes.includes("Metal");
  let normalCheck = mapTypes.includes("Normal");
  let roughnessCheck = mapTypes.includes("Roughness");

  let modelMaps = [];

  for (let i = 0; i < models.length; i++) {
    const [
      alpha,
      ao,
      color,
      displacement,
      emissive,
      metalness,
      normal,
      roughness,
    ] = await Promise.all([
      getMapType(alphaCheck, mat, models[i].name, "Alpha"),
      getMapType(aoCheck, mat, models[i].name, "AO"),
      getMapType(colorCheck, mat, models[i].name, "Color"),
      getMapType(displacementCheck, mat, models[i].name, "Displacement"),
      getMapType(emissiveCheck, mat, models[i].name, "Emissive"),
      getMapType(metalnessCheck, mat, models[i].name, "Metal"),
      getMapType(normalCheck, mat, models[i].name, "Normal"),
      getMapType(roughnessCheck, mat, models[i].name, "Roughness"),
    ]);

    modelMaps.push({
      path: models[i].path,
      name: models[i].name,
      alpha: alpha,
      ao: ao,
      color: color,
      displacement: displacement,
      emissive: emissive,
      metalness: metalness,
      normal: normal,
      roughness: roughness,
    });
  }

  return modelMaps;
}

async function getMapType(
  check: boolean,
  mat: string,
  name: string,
  map: string
) {
  if (!check) {
    return Promise.resolve("/NullImg.png");
  }
  const { data: files, error } = await supabase.storage
    .from("material-assets")
    .list(`maps/${mat}/${map}`);

  if (
    error ||
    files.map((file) => file.name).indexOf(`${name}${map}.png`) == -1
  ) {
    return Promise.resolve("/NullImg.png");
  } else {
    return supabase.storage
      .from(`material-assets/maps/${mat}/${map}`)
      .getPublicUrl(`${name}${map}.png`).data.publicUrl;
  }
}
