import { supabase } from "@/lib/supabase";

export default async function getDownloads(mat: string): Promise<string> {
  return await supabase.storage
    .from("material-downloads")
    .createSignedUrl(`${mat}.blend.zip`, 3600)
    .then(({ data, error }) => (error || !data ? "" : data.signedUrl));
}
