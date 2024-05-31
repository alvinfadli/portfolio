import Image from "next/image";
import ProjectIll from "./../public/project-homepage.webp";

// TODO: add project, contact, skills to the page
export default function Project() {
  return (
    <>
      <div className=" dark:bg-neutral-900 w-full">
        <div className="py-8 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto px-5 md:px-0 sm:border-l border-dashed">
          <div className="flex flex-col-reverse md:flex-row pt-5 gap-5 items-center md:pl-5 mx-auto">
            <div className="w-full md:w-6/12 pt-2 pl-1.5 md:pl-0">
              <h1 className="font-semibold text-2xl pb-5">Project</h1>
              <div>
                <p>
                  Explore a variety of projects that demonstrate my proficiency
                  in design, development, and innovation. Each project
                  exemplifies my commitment to excellence and my ability to
                  deliver high-quality results.
                </p>
              </div>
              <div className="flex w-full mt-5 gap-10 flex-wrap">
                <a
                  className="bg-black rounded-xl text-white text-sm px-5 py-1.5 font-bold hover:bg-neutral-700"
                  href="/project"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="flex justify-center w-full md:h-full md:w-5/12">
              <div className="w-full h-80 md:h-96 flex items-center">
                <Image
                  src={ProjectIll}
                  alt="project illustration"
                  width={200}
                  height={200}
                  sizes="100vw"
                  placeholder="blur"
                  priority
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
