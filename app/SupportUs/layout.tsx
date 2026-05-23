import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";

export const metadata: Metadata = {
  title: "Krystal - Support Us",
  description:
    "Krystal's Support Us Page. Please consider donating so I can continue making models, textures, materials, prints, and more. With your support, I can grow and expand Krystal to better serve you and the rest of the 3D community. ",
  keywords:
    "Krystal3D, 3D Printing, 3D Models, Blender Materials, Seamless Textures, Support Us",
  alternates: {
    canonical: "https://www.krystal3d.com/SupportUs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
