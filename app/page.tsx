"use client";
import MainFooter from "@/components/MainFooter";
import MainNavbar from "@/components/MainNavbar";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";

export default function Home() {
  return (
    <main className="relative w-full mx-auto text-base main">
      <MainNavbar />
      <div className="hero">
        <Hero />
        <Project />
        <Experience />
      </div>
      <MainFooter />
    </main>
  );
}
