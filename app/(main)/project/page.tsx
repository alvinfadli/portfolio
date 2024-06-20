import ProjectCard from "@/components/ProjectCard";
import { project } from "@/data/Data";
import { DM_Serif_Display } from "next/font/google";

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Project() {
  return (
    <>
      <div className="mx-auto w-full">
        <div className="flex flex-col py-10">
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-justify">
            Here are some of the projects that I have worked on throughout my
            career. Explore my other projects on{" "}
            <a
              className="font-medium text-indigo-400"
              href="https://github.com/alvinfadli"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <ProjectCard projects={project} />
        </div>
      </div>
    </>
  );
}
