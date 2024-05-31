import ProjectCard from "@/components/ProjectCard";
import { project } from "@/data/Data";

export default function Project() {
  return (
    <>
      <div className="min-h-screen py-24 px-3 w-full flex justify-center">
        <div className="flex flex-wrap items-start gap-3 justify-center w-full">
          <ProjectCard projects={project} />
        </div>
      </div>
    </>
  );
}
