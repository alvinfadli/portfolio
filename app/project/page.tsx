"use client";
import ProjectCard from "@/components/ProjectCard";
import { project } from "@/data/Data";

export default function Project() {
  return (
    <>
      <div className="min-h-screen py-24 px-3 md:px-0 w-full sm:w-11/12 lg:w-10/12 2xl:w-8/12 mx-auto flex flex-col">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold pb-5">Projects</h1>
          <p>
            Here are some of the projects that I have worked on throughout my
            career.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-8 justify-center w-full">
          <ProjectCard projects={project} />
        </div>
      </div>
    </>
  );
}
