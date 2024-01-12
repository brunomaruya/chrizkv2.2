import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComp from "../../Components/Layout/NavbarComp";
import MainProvider from "../../Providers/MainProvider";

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
    <html lang="en">
      <body className={inter.className}>
        <MainProvider>
          <NavbarComp />
          <main>{children}</main>
        </MainProvider>
      </body>
    </html>
  );
}
