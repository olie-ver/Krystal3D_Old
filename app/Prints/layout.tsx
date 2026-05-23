import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";

export const metadata: Metadata = {
  title: "Krystal - 3D Prints",
  description:
    "Krystal's 3D Prints Page. All files are .stl files. We try to have a wide variety of files for you to download and view. The original files can be made available upon request.",
  keywords: "3D Prints, .stl",
  alternates: {
    canonical: "https://www.krystal3d.com/Prints",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
