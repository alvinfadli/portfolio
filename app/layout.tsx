import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/providers/providers";

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
            <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
