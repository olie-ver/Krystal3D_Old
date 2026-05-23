import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";

export const metadata: Metadata = {
  title: "Krystal - 3D Models",
  description:
    "Krystal's 3D Models Page. Each model can be downloaded in multiple formats including .obj, .glb, .fbx, and .blend in case you want access to the original Blender file. Everything is free to download an use in personal projects.",
  keywords: "3D Models, .obj, .glb, .fbx, .blend",
  alternates: {
    canonical: "https://www.krystal3d.com/Models",
  },
};

//Change className to Midnight
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
