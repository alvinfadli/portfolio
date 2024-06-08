"use client";
import Project from "@/types/Project";
import { useRouter } from "next/navigation";

/*
  Note :
  - For the best display, make sure image ratio for the project banner is 3:2
*/

interface ProjectCardProps {
  projects: Project[];
}

const ProjectCard = ({ projects }: ProjectCardProps) => {
  const router = useRouter();

  if (!projects || projects.length === 0) {
    return <div>No projects available</div>;
  }

  const gradientColors = [
    ["from-gray-100", "via-yellow-100", "to-stone-100 "],
    ["from-gray-100", "via-indigo-100", "to-stone-100 "],
    ["from-gray-100", "via-rose-100", "to-stone-100 "],
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div
          className="flex min-h-full max-w-sm flex-grow flex-col rounded-[5px] border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          key={index}
        >
          <div className="pb-2/3 relative overflow-hidden">
            <div
              className={`m-1 animate-gradient-move rounded-[5px] border bg-slate-100 bg-gradient-to-l ${gradientColors[index % gradientColors.length].join(" ")} bg-[length:200%_200%]`}
            >
              <div className="px-8 pt-8">
                <img
                  src={project.imgSrc}
                  alt="Responsive Image"
                  className="h-full w-full rounded-t-[5px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-grow flex-col p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h5>
            <p className="flex-grow font-normal text-gray-700 dark:text-gray-400">
              {project.desc}
            </p>
            <div className="my-3">
              <div className="flex flex-wrap gap-1 text-sm text-slate-500">
                {project.tech.map((item: any, index: any) => (
                  <p
                    className="rounded-[4px] bg-slate-200 px-3 py-1"
                    key={index}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <a
              href={project.projectLink}
              target="_blank"
              className="inline-flex items-center rounded-lg px-1 text-center font-medium text-indigo-500 hover:text-black"
            >
              Visit
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
