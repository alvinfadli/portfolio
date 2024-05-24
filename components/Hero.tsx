import React from "react";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import { FileDown, UserRound } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative pt-20 md:py-0 h-screen flex flex-col items-center justify-center px-5">
      <div className={`flex w-full`}>
        <div className="w-full  flex flex-col ">
          <h1 className="flex justify-center text-3xl md:text-4xl xl:text-5xl font-medium">
            <div className="sm:w-11/12 2xl:w-10/12">
              <p className="text-center sm:text-left ">a software engineer.</p>
              <p className="text-center sm:text-right">
                expertise in digital craftsmanship:
              </p>
              <p className="text-center sm:text-right">
                development, design, research, and beyond.
              </p>
              <div className="flex flex-col md:flex-row w-1/2 md:w-full mx-auto justify-center md:justify-end my-5">
                <Link
                  href={
                    "https://docs.google.com/document/d/1eIJ8GaeF1q7-3LQrcEF6PhJdVpvcobrIBpof8kREe18/edit?usp=sharing"
                  }
                  target="_blank"
                  className="text-sm flex justify-center items-center gap-0.5 py-2 px-5 bg-neutral-900  text-white border shadow-lg rounded-[5px]"
                >
                  <span>
                    <FileDown size={20} />
                  </span>
                  My Resume
                </Link>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
