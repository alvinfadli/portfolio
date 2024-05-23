import React from "react";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import { FileDown, UserRound } from "lucide-react";

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
            </div>
          </h1>
          {/* <div className="flex flex-col md:flex-row w-1/2 md:w-full mx-auto justify-center md:justify-end my-5 gap-2">
            <Button text="My Resume" icon={<FileDown size={20} />} />
            <Button text="About Me" icon={<UserRound size={20} />} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
