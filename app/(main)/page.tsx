"use client";
import ProjectCard from "@/components/ProjectCard";
import { project } from "@/data/Data";
import { Link } from "next-view-transitions";

export default function Home() {
  const previewProjects = project.slice(0, 2);
  return (
    <>
      <div className="flex flex-col py-10">
        <h1 className="my-name text-2xl font-bold">Alvin Fadli Dwi Mulya</h1>
        <p>Software Engineer</p>
      </div>
      <p className="flex items-stretch text-justify text-slate-800">
        Junior Software Engineer proficient in Fullstack Development. Interested
        in React, Svelte, and Go.
      </p>
      <div className="my-5">
        <div className="flex gap-3">
          <div className="rounded-xl border bg-blue-500 p-2 hover:bg-blue-800 hover:shadow-lg">
            <Link
              href={`https://www.linkedin.com/in/alvinfadli/`}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                />
              </svg>
            </Link>
          </div>
          <div className="rounded-xl border bg-slate-800 p-2 hover:bg-slate-900 hover:shadow-lg">
            <Link href={`https://github.com/alvinfadli`} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="white"
                    d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-10">
        <p className="mb-8 text-lg font-semibold underline underline-offset-4">
          Recent <span className="project">Projects</span>
        </p>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <ProjectCard projects={previewProjects} />
        </div>
        <Link
          href={"/project"}
          className="py-5 text-center text-sm text-blue-500 underline underline-offset-4"
        >
          See all projects
        </Link>
      </div>
    </>
  );
}
