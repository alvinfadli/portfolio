"use client";
import Hero from "@/components/Hero";
import Project from "@/components/ProjectHomepage";
import AchievementHomepage from "@/components/AchievementHomepage";

// TODO: add project, contact, skills to the page
export default function Home() {
  return (
    <>
      <Hero />

      <Project />

      <AchievementHomepage />
    </>
  );
}
