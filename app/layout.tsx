import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { ViewTransitions } from "next-view-transitions";

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
    <ViewTransitions>
      <html lang="en" className="" suppressHydrationWarning>
        <body className={`${inter.className} `}>
          <main className="relative mx-auto min-h-screen w-full md:w-10/12 lg:w-8/12 2xl:w-6/12">
            <Navbar />
            <div className="px-5 pb-20">{children}</div>
            <Footer />
          </main>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
