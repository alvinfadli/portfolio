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
    <nav className={`fixed w-full z-50 py-6 bg-transparent`}>
      <div className="w-full sm:w-11/12 flex justify-between  items-center mx-auto px-3">
        <h1 className={`${dm_serif.className} text-3xl text-center`}>Alvin.</h1>
        <div className="flex gap-3 xl:gap-4">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
