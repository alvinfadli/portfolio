import Image from "next/image";
import AchievementIll from "./../public/achievement-homepage.webp";

// TODO: add project, contact, skills to the page
export default function AchievementHomepage() {
  return (
    <>
      <div className=" dark:bg-neutral-900 w-full">
        <div className="py-14 md:py-20 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto px-5 md:px-0 sm:border-l border-dashed">
          <div className="flex flex-col md:flex-row pt-5 gap-5 items-center justify-start md:pl-5">
            <div className="flex justify-start w-full md:h-full md:w-5/12">
              <div className="w-full h-80 md:h-96 flex items-center">
                <Image
                  src={AchievementIll}
                  alt="project illustration"
                  width={320}
                  height={320}
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
            <div className="w-full md:w-6/12 pt-2 pl-1.5 md:pl-0 mx-auto ">
              <div className="w-full">
                <h1 className="font-semibold text-2xl pb-5">Achievement</h1>
                <div>
                  <p>
                    Browse through milestones and accomplishments that reflect
                    my dedication, expertise, and contributions.
                  </p>
                </div>
                <div className="flex w-full mt-5 gap-10 flex-wrap">
                  <button className="bg-black rounded-full text-white text-sm px-5 py-1.5 font-bold">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
