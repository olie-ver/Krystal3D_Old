import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";

export const metadata: Metadata = {
  title: "Krystal - Model Preview",
  description:
    "Krystal's Model Preview Page. View any 3D model on the site to see how it could look in your own projects. Each model can be downloaded in .obj, .fbx, .glb, and .blend completely for free for personal projects.",
  keywords: "3D Model Preview",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
