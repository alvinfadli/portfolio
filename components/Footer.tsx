import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <div className="mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mt-10">
    <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
    <div className={`flex sm:items-center justify-between p-5`}>
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
