import Materials from "./Materials";
import MaterialItems from "@/Components/ServerComponents/PageItems/MaterialItems";
import TextureItems from "@/Components/ServerComponents/PageItems/TextureItems";

// export const experimental_ppr = true

export default function Page() {
  return (
    <Materials materials={<MaterialItems />} textures={<TextureItems />} />
  );
}
