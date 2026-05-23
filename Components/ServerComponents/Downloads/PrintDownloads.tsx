import { supabase } from "@/lib/supabase";

export default async function getDownloads(print: string) {
  return await supabase.storage
    .from("print-downloads")
    .createSignedUrl(`${print}.zip`, 3600)
    .then(({ data, error }) => (error || !data ? "" : data.signedUrl));
}
