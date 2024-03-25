'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./Navbar";

import AnimatedBackgroundAnimateCSS from '../components/AnimateBackgroundAnimateCSS';
import AnimatedBackgroundAnimeJS from '../components/AnimateBackgroundAnimeJS';
import Footer from "./Footer";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "WyseTime Technologies",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto">
      <Navbar/>
      <AnimatedBackgroundAnimeJS/>
        <div className="wrapper">
        <main className="relative z-10 min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
