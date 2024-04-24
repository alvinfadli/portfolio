import { Github, Linkedin } from "lucide-react";
import Footer from "./ui/Footer";

/* Main footer feature component */

export default function MainFooter() {
  return (
    <Footer>
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
    </Footer>
  );
}
