import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/providers/providers";
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
        <Providers>
          <main className="relative w-full mx-auto text-base">
            <Navbar />
            <div>{children}</div>
            <Footer />
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
