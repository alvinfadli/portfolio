import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();

  return (
    <div
      className={`relative sm:py-0 h-[90vh] sm:h-screen flex flex-col px-5 w-full sm:w-11/12 md:w-10/12 lg:w-8/12  mx-auto  `}
    >
      <div className="absolute bottom-0 pb-10 left-0 border-l px-5 sm:border-dashed ">
        <div className="w-7/12">
          <h1 className="text-4xl sm:text-6xl  2xl:text-[5.5rem] text-left">
            SOFTWARE ENGINEER
          </h1>
          <h1 className="text-4xl sm:text-6xl  2xl:text-[5.5rem] text-left text-neutral-600">
            FOCUSED ON DIGITAL CRAFTSMANSHIP
          </h1>
        </div>
        <div className="my-5 sm:my-10 pl-2">
          <div className="w-auto inline-block">
            <div className="flex gap-5 sm:gap-10">
              <div className="flex items-center">
                <Link
                  href={
                    "https://docs.google.com/document/d/1eIJ8GaeF1q7-3LQrcEF6PhJdVpvcobrIBpof8kREe18/edit?usp=sharing"
                  }
                  target="_blank"
                  className="text-sm flex justify-center items-center gap-0.5 py-2 sm:py-4 px-5 sm:px-10 bg-neutral-900  text-white border shadow-lg"
                >
                  Resume
                </Link>
              </div>
              <div className="w-full sm:w-1/2 flex items-center">
                <p className="">
                  Discover how my skills and experience can bring value to your
                  team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute"></div>
    </div>
  );
};

export default Hero;
