import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";

export const metadata: Metadata = {
  title: "Krystal - Material Preview",
  description:
    "Krystal's Material Preview Page. The material you're viewing changes with each icon you click. Here you can view procedural Blender materials before you decide if you want to download them.",
  keywords: "3D Material Preview",
};

//Change className to Midnight
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
