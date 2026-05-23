import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/Components/ClientComponents/ThemeContext";

export const metadata: Metadata = {
  title: "Krystal - Print Preview",
  description:
    "Krystal's Print Preview Page. Download and view any one of our 3D print files available in .stl format. If you'd like to download the original model for you to edit/remix, please go to the Contact Us page.",
  keywords: "3D Print Preview",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
