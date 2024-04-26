"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative w-full mx-auto text-base">
      <Navbar />
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
