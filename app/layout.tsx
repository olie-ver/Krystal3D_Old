import type { Metadata } from "next";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krystal - Home",
  description:
    "Krystal's Homepage. Find Blender procedural materials, seamless textures of resolutions ranging from 1k to 4k, 3D models in low, mid, and high poly counts with materials included in formats such as .obj, .glb, .fbx, and .blend, as well as 3D print files. Thank you for visiting and we hope you'll enjoy what your visit!",
  keywords: "Textures, 3D Models, 3D Prints",
  alternates: {
    canonical: "https://www.krystal3d.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="Xdh-K802ggHox0S9iJb-26mMbuqoBYt66uhvvDQJHeA"
      />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
