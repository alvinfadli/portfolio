import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <div className="mx-auto mt-10 w-full">
    <hr className="border-gray-200 sm:mx-auto" />
    <div className={`flex justify-between p-5 sm:items-center`}>
      <p className="text-sm text-gray-500 sm:text-center">
        2024 ● Alvin Fadli Dwi Mulya
      </p>
      <div className="flex items-center sm:mt-0 sm:justify-center">
        <a
          href="https://www.linkedin.com/in/alvinfadli/"
          target="_blank"
          className="text-gray-500 hover:text-gray-900"
        >
          <Linkedin size={20} />
          <span className="sr-only">Linkedin profile</span>
        </a>
        <a
          href="https://github.com/alvinfadli"
          target="_blank"
          className="ms-5 text-gray-500 hover:text-gray-900"
        >
          <Github size={20} />
          <span className="sr-only">Github account</span>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
