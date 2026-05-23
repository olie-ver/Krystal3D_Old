import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";

export const metadata: Metadata = {
  title: "Krystal - About Us",
  description:
    "Krystal's About Us Page. Believe it or not, but there are people behind this project, and by people, I mean one person. Check him out and see what he has to say!",
  keywords:
    "Krystal3D, 3D Printing, 3D Models, Blender Materials, Seamless Textures",
  alternates: {
    canonical: "https://www.krystal3d.com/AboutUs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
