import { supabase } from "@/lib/supabase";

export default async function getDownloads(txr: string): Promise<string[]> {
  const { data: files, error: listError } = await supabase.storage
    .from("texture-downloads")
    .list(txr);

  if (listError || !files) {
    return [""];
  }

  // Parallel signed URL generation
  const signedUrlPromises = files.map((file) =>
    supabase.storage
      .from("texture-downloads")
      .createSignedUrl(`${txr}/${file.name}`, 3600)
      .then(({ data, error }) => (error || !data ? "" : data.signedUrl))
  );

  return Promise.all(signedUrlPromises);
}
