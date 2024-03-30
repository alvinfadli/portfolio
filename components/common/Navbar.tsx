import React from "react";
import { DM_Serif_Display } from "next/font/google";
const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Navbar = () => (
  <div className="fixed w-full shadow-sm p-4 xl:p-6 z-50 border-solid border-b  backdrop-blur-md bg-white/50">
    <div className="w-full flex justify-between  items-center xl:w-10/12 mx-auto ">
      <h1 className={`${dm_serif.className} text-xl xl:text-2xl text-center`}>
        A
      </h1>
      <div className="flex gap-3 xl:gap-4">
        <a href="#project">Projects</a>
        <a href="#">Experiences</a>
      </div>
    </div>
  </div>
);

export default Navbar;
