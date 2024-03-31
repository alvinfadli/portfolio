import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { Github, Linkedin } from "lucide-react";
const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Footer = () => (
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="flex sm:items-center justify-between px-5 ">
      <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
        2024 ● Alvin Fadli Dwi Mulya
      </p>
      <div className="flex sm:justify-center items-center sm:mt-0">
        <a
          href="https://www.linkedin.com/in/alvinfadli/"
          target="_blank"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <Linkedin size={20} />
          <span className="sr-only">Linkedin profile</span>
        </a>
        <a
          href="https://github.com/alvinfadli"
          target="_blank"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
        >
          <Github size={20} />
          <span className="sr-only">Github account</span>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
