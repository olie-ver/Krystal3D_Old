export const dynamic = "force-dynamic";
import InternalServerError from "@/app/500";
import { supabase } from '@/lib/supabase';
import { ItemMenu, ItemSelect } from "../../ClientComponents/ItemSelects/ItemSelect";

export default async function BrowseItems() {
  const { data: files, error } = await supabase.storage.from("browse-icons").list("");
  if (error) {
    console.error('Supabase storage list error:', error);
    return <InternalServerError
        error={`The requested links couldn't be loaded.
        Please refresh or navigate to a different page.
        If this doesn't work, please contact us for more support.`}
      />
  }

  console.log("files: ", files);

  if (!files || files.length === 0) {
    return <p>No files found</p>;
  }

  const iconData = files?.filter((file) => file.name.endsWith(".png"))
                         .map((file) => {
                          const publicUrlData = supabase.storage.from("browse-icons").getPublicUrl(file.name);
                          return {title: file.name.slice(0, -4), src: publicUrlData.data.publicUrl, href: `/${file.name.slice(0, -4)}`
                          }});
  console.log(iconData);

  return <ItemMenu>{createItems(iconData)}</ItemMenu>
}

// /*
//   Parameters: title: the displayed title of the item being displayed
//               src: the image source
//               href: the link that clicking on the item will take you to
//   Turns all the parameters into an ItemSelect DOM element
// */
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