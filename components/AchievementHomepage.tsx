import Image from "next/image";
import AchievementIll from "./../public/achievement-homepage.webp";

export default function AchievementHomepage() {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto w-full border-dashed px-5 py-8 sm:w-11/12 sm:border-l md:px-0 xl:w-10/12 2xl:w-8/12">
          <div className="flex flex-col items-center justify-start gap-5 pt-5 md:flex-row md:pl-5">
            <div className="flex w-full justify-start md:h-full md:w-5/12">
              <div className="mx-auto flex w-full items-center sm:w-6/12 md:w-8/12 lg:w-10/12 xl:w-full">
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
            <div className="mx-auto w-full pl-1.5 pt-2 md:w-6/12 md:pl-0">
              <div className="w-full">
                <h1 className="pb-5 text-2xl font-semibold">Achivements</h1>
                <div>
                  <p>
                    Browse through milestones and accomplishments that reflect
                    my dedication, expertise, and contributions. Throughout my
                    journey, I have always wanted to give my best, both inside
                    and outside of software engineering fields.
                  </p>
                </div>
                <div className="mt-5 flex w-full flex-wrap gap-10">
                  <button className="rounded-xl bg-black px-5 py-1.5 text-sm font-bold text-white">
                    Explore
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
