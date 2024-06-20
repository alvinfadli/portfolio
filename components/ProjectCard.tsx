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
          className="flex min-h-36 rounded-[10px] border p-5 text-sm"
          key={index}
        >
          <div className="flex">
            <div className="flex w-8/12 flex-col gap-2">
              <h1 className="font-medium">{project.title}</h1>
              <p className="text-slate-600">{project.desc}</p>
              <div className="my-3">
                <div className="flex flex-wrap gap-1 text-xs text-slate-500">
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
                className="group inline-flex items-center rounded-lg px-1 text-center font-medium text-blue-500 hover:text-black"
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
            <div className="flex w-4/12 items-center">
              <img src={project.imgSrc} alt="Responsive Image" className="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
