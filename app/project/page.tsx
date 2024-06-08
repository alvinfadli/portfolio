import ProjectCard from "@/components/ProjectCard";
import { project } from "@/data/Data";

export default function Project() {
  return (
    <>
      <div className="mx-auto flex min-h-screen w-full flex-col px-3 py-24 sm:w-11/12 md:px-0 lg:w-10/12 2xl:w-8/12">
        <div className="mb-10 text-center">
          <h1 className="pb-5 text-3xl font-semibold">Projects</h1>
          <p>
            Here are some of the projects that I have worked on throughout my
            career.
          </p>
          <p>
            Explore my other projects on{" "}
            <a
              className="font-medium text-indigo-400"
              href="https://github.com/alvinfadli"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <ProjectCard projects={project} />
        </div>
      </div>
    </>
  );
}
