import { supabase } from "@/lib/supabase";

export default async function getDownloads(model: string, pack: string) {
  const { data: files, error: listError } = await supabase.storage
    .from("model-downloads")
    .list(`${pack}/${model}/Material`);

  const { data: files2, error: listError2 } = await supabase.storage
    .from("model-downloads")
    .list(`${pack}/${model}/Model`);

  if (listError || !files || !files2 || listError2) {
    return { model: [""], material: [""] };
  }

  // Parallel signed URL generation
  const signedMaterialUrlPromises = await Promise.all(
    files.map((file) =>
      supabase.storage
        .from("model-downloads")
        .createSignedUrl(`${pack}/${model}/Material/${file.name}`, 3600)
        .then(({ data, error }) => (error || !data ? "" : data.signedUrl))
    )
  );

  const signedModelUrlPromises = await Promise.all(
    files2.map((file) =>
      supabase.storage
        .from("model-downloads")
        .createSignedUrl(`${pack}/${model}/Model/${file.name}`, 3600)
        .then(({ data, error }) => (error || !data ? "" : data.signedUrl))
    )
  );

  return {
    model: signedModelUrlPromises,
    material: signedMaterialUrlPromises,
  };
}
