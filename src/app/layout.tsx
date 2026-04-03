import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Kapish Technologies — Building Digital Products That Drive Growth",
  description: "Kapish Technologies is a modern tech startup building high-performance websites, apps, and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-indigo-500/30 overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-grow pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
