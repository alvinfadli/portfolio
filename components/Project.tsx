import React from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "./ui/ProjectCard";

const Project = () => {
  const router = useRouter();

  return (
    <div className="relative md:py-0 px-5">
      <h1 className="text-xl md:text-2xl xl:text-5xl 2xl:text-6xl font-medium mb-5">
        Project
      </h1>
      <div>
        <div className="flex flex-wrap gap-2 items-center">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Project;
