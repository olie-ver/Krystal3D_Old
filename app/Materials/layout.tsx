import type { Metadata } from "next";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";
import "../globals.css";

export const metadata: Metadata = {
  title: "Krystal - Materials/Textures",
  description:
    "Krystal's Materials and Textures Page. Here you'll find procedural Blender materials and seamless textures in resolutions from 1k to 4k. Everything is free to download and use for personal projects.",
  keywords:
    "3D Materials, 3D Textures, Blender Materials, Blender Cycles Materials",
  alternates: {
    canonical: "https://www.krystal3d.com/Materials",
  },
};

//Change className to Midnight
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
