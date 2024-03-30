import React from "react";
import { DM_Serif_Display } from "next/font/google";
import Tech from "./Tech";

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Hero = () => (
  <div className="h-screen flex items-center justify-center pt-20 px-5">
    <div>
      <h1 className={`${dm_serif.className} text-3xl xl:text-6xl text-center`}>
        Alvin Fadli Dwi Mulya
      </h1>
      <p className="text-center pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit!
      </p>
      <div className="flex justify-center p-8 gap-5">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 128 128"
          >
            <path
              fill="#0076b2"
              d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
            />
            <path
              fill="#fff"
              d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
            />
          </svg>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z"
            />
          </svg>
        </a>
      </div>
      <div className="flex justify-center pt-24">
        <div className="w-full">
          <h1 className="text-xl xl:text-2xl font-semibold text-center xl:pb-8 ">
            Technologies Used
          </h1>
          <Tech />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
