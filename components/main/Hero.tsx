import React from "react";
import { DM_Serif_Display } from "next/font/google";
import Tech from "./Tech";
import Button from "@/components/common/Button";
import { ChevronDown, File } from "lucide-react";

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Hero: React.FC = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <div className="relative h-screen flex flex-col items-center justify-center pt-20 px-5">
      <div className="z-10" data-aos="fade-up">
        <h1
          className={`${dm_serif.className} text-3xl xl:text-6xl text-center`}
        >
          Alvin Fadli Dwi Mulya
        </h1>
        <p className="text-center pt-5">A software engineer.</p>
        <div className="flex justify-center p-8 gap-5">
          <Button text="Download CV" onClick={handleClick} />
        </div>
        <div className="flex justify-center xl:pt-2">
          <div className="w-full">
            <h1
              className={`${dm_serif.className} text-lg xl:text-xl font-semibold text-center xl:pb-2`}
            >
              Technologies Used
            </h1>
            <Tech />
          </div>
        </div>
      </div>
      <div className="absolute bottom-16 ">
        <ChevronDown size={35} />
      </div>
    </div>
  );
};

export default Hero;
