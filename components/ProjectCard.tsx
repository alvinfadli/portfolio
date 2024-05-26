import Project from "@/types/Project";
import Card from "./ui/Card";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  projects: Project[];
}

const ProjectCard = ({ projects }: ProjectCardProps) => {
  const router = useRouter();

  if (!projects || projects.length === 0) {
    return <div>No projects available</div>;
  }

  return (
    <>
      {projects.map((project, index) => (
        <Card
          className="text-left w-full md:w-[32%]"
          key={index}
          onClick={() => {
            window.open(project.projectLink, "_blank");
          }}
        >
          <div className="m-1.5 border">
            <img className="rounded-t-lg" src={`/${project.imgSrc}`} alt="" />
          </div>
          <div className="px-5 pb-5 pt-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.desc}
            </p>
          </div>
        </Card>
      ))}
    </>
  );
};

export default ProjectCard;
