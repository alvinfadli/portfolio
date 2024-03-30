"use client";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";
export default function Home() {
  return (
    <main className="relative w-full mx-auto text-base main">
      <Navbar />
      <div>
        <Hero />
        <Project />
      </div>
    </main>
  );
}
