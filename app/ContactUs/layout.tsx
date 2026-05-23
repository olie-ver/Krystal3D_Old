import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";

export const metadata: Metadata = {
  title: "Krystal - Contact Us",
  description:
    "Krystal's Contact Us Page used for contacting us. Please use this page if there's an issue, a request, or anything that's not spam. I do read everything so I'd like emails to not be random junk please.",
  keywords:
    "Issues, Feature Request, Custom Materials, Custom Textures, Custom Models, Custom Prints",
  alternates: {
    canonical: "https://www.krystal3d.com/ContactUs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
