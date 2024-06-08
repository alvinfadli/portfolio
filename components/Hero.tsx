import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className={`relative mx-auto flex h-[95vh] w-full flex-col px-5 sm:h-screen sm:w-11/12 sm:py-0 lg:w-10/12 2xl:w-8/12`}
    >
      <div className="absolute bottom-0 left-0 border-l px-5 pb-10 sm:border-dashed">
        <div className="w-7/12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[5.5rem]">
          <h1 className="text-left">SOFTWARE ENGINEER</h1>
          <h1 className="text-left text-neutral-600">
            FOCUSED ON DIGITAL CRAFTSMANSHIP
          </h1>
        </div>
        <div className="my-5 pl-2 sm:my-10">
          <div className="inline-block w-auto">
            <div className="flex gap-5 sm:gap-10">
              <div className="flex items-center">
                <Link
                  href={
                    "https://docs.google.com/document/d/1eIJ8GaeF1q7-3LQrcEF6PhJdVpvcobrIBpof8kREe18/edit?usp=sharing"
                  }
                  target="_blank"
                  className="flex items-center justify-center gap-0.5 border bg-neutral-900 px-5 py-2 text-sm text-white shadow-lg sm:px-10 sm:py-4"
                >
                  Resume
                </Link>
              </div>
              <div className="flex w-full items-center sm:w-1/2">
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
