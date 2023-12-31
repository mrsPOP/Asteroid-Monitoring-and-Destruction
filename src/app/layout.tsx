import "../../public/styles/normalize.css";
import "../../public/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AboutSite from "@/components/AboutSite/AboutSite";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AboutSite />
        {children}
      </body>
    </html>
  );
}
