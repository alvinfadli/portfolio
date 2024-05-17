import React from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { user } from "@/data/Data";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative py-20 md:py-0 h-screen flex flex-col items-center justify-center px-5">
      <div className={`flex w-full`}>
        <div className="w-full  flex flex-col ">
          <h1 className="flex justify-end text-2xl md:text-3xl xl:text-5xl font-medium">
            <div className="sm:w-11/12">
              <p className="text-center sm:text-left">
                Turn ideas into innovative products.
              </p>
              <p className="text-center sm:text-right">
                expertise in digital craftsmanship:
              </p>
              <p className="text-center sm:text-right">
                development, design, research, and beyond.
              </p>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
