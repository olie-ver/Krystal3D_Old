import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";

export const metadata: Metadata = {
  title: "Krystal - Browse",
  description:
    "Krystal's Browse Page. The current links we have are for the materials/textures page and the models page. More links are on the way as we try to expand and grow our site. Have fun browsing around!",
  keywords: "Materials, 3D Models, Seamless Textures",
  alternates: {
    canonical: "https://www.krystal3d.com/Browse",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
