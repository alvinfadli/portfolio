import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio • Alvin",
  description: "Alvin's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="relative mx-auto w-full md:w-10/12 lg:w-8/12 2xl:w-6/12">
          <Navbar />
          <div className="min-h-[80vh] px-5">{children}</div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
