import ProjectCard from "@/components/ProjectCard";
import { project } from "@/data/Data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col py-10">
        <h1 className="text-2xl font-bold">Alvin Fadli Dwi Mulya</h1>
        <p>Software Engineer</p>
      </div>
      <p className="flex items-stretch text-justify text-slate-800">
        Junior Software Engineer with a foundational understanding of Fullstack
        Development. Interested in React, Svelte, and Go.
      </p>
      <div className="my-5">
        <a
          href="/about"
          className="text-base text-slate-600 underline underline-offset-2"
        >
          Learn more
        </a>
      </div>
      <div className="flex flex-col py-10">
        <p className="mb-8 text-lg font-semibold underline underline-offset-4">
          Recent projects
        </p>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <ProjectCard projects={project} />
        </div>
      </div>
    </>
  );
}
