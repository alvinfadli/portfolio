"use client";
import HomepageNavbar from "@/components/HomepageNavbar";
import Footer from "@/components/common/Footer";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";

export default function Home() {
  return (
    <main className="relative w-full mx-auto text-base main">
      <HomepageNavbar />
      <div className="hero">
        <Hero />
        <Project />
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
