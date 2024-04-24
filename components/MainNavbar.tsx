import Navbar from "./ui/Navbar";
import { DM_Serif_Display } from "next/font/google";
import { Github } from "lucide-react";

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

/* Main navbar feature component */

export default function HomepageNavbar() {
  return (
    <Navbar>
      <h1 className={`${dm_serif.className} text-xl xl:text-2xl text-center`}>
        A
      </h1>
      <div className="flex gap-3 xl:gap-4">
        <a
          href="https://github.com/alvinfadli"
          target="_blank"
          className="text-gray-500 bg-slate-200 p-2 rounded-[8px] shadow-md hover:text-gray-900 dark:hover:text-white ms-5"
        >
          <Github size={20} />
          <span className="sr-only">Github account</span>
        </a>
      </div>
    </Navbar>
  );
}
