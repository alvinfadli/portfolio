"use client";
import MainFooter from "@/components/MainFooter";
import MainNavbar from "@/components/MainNavbar";
import Experience from "@/components/main/Experience";
import Project from "@/components/main/Project";
import HeroContainer from "@/components/HeroContainer";

export default function Home() {
  return (
    <main className="relative w-full mx-auto text-base">
      <MainNavbar />
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <HeroContainer />
      </div>
      <MainFooter />
    </main>
  );
}
