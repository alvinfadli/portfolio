"use client";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";
export default function Home() {
  return (
    <main className="relative w-full mx-auto text-base main">
      <Navbar />
      <div className="hero">
        <Hero />
        <Project />
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
