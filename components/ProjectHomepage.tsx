import Image from "next/image";
import ProjectIll from "./../public/project-homepage.webp";

export default function Project() {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto w-full border-dashed px-5 py-8 sm:w-11/12 sm:border-l md:px-0 lg:w-10/12 2xl:w-8/12">
          <div className="mx-auto flex flex-col-reverse items-center gap-5 pt-5 md:flex-row md:pl-5">
            <div className="w-full pl-1.5 pt-2 md:w-6/12 md:pl-0">
              <h1 className="pb-5 text-2xl font-semibold">Project</h1>
              <div>
                <p>
                  Explore a range of projects that highlight the progress of my
                  skills in design, development, and innovation. I always strive
                  to learn new tools and technologies that are relevant in the
                  industry.
                </p>
              </div>
              <div className="mt-5 flex w-full flex-wrap gap-10">
                <a
                  className="rounded-xl bg-black px-5 py-1.5 text-sm font-bold text-white hover:bg-neutral-700"
                  href="/project"
                >
                  Explore
                </a>
              </div>
            </div>
            <div className="flex w-full justify-center md:h-full md:w-5/12">
              <div className="flex w-full items-center sm:w-6/12 md:w-8/12 lg:w-10/12 xl:w-full">
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
