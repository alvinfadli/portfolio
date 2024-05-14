import { DM_Serif_Display } from "next/font/google";
import { Github } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Navbar = () => {
  return (
    <nav
      className={`fixed w-full shadow-b-sm p-2 xl:p-4 z-50 border-solid border-b backdrop-b-blur-md bg-white/50 dark:bg-neutral-900 dark:border-neutral-700`}
    >
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 flex justify-between  items-center mx-auto px-3">
        <h1 className={`${dm_serif.className} text-xl xl:text-2xl text-center`}>
          A
        </h1>
        <div className="flex gap-3 xl:gap-4">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
