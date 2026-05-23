import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";

export const metadata: Metadata = {
  title: "Krystal - Texture Preview",
  description:
    "Krystal's Texture Preview Page. The texture you're viewing depends on which icon you click. Here, each texture is wrapped around multiple different objects to show you how it will wrap around. If a texture isn't exactly how you like it, there's usually a material that you can download instead.",
  keywords: "3D Texture Preview",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
