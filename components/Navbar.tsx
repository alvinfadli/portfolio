import { Link } from "next-view-transitions";
import { DM_Serif_Display } from "next/font/google";
import { useState, useEffect } from "react";

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Navbar = () => {
  return (
    <nav className="px-5 py-5 md:pt-10">
      <div className="mx-auto flex w-full items-center justify-between">
        <Link
          className="text-medium rounded-[5px] bg-slate-800 px-2 pt-1 text-center font-serif text-2xl font-bold text-white hover:bg-slate-900 hover:shadow-md"
          href="/"
        >
          A
        </Link>
        <div className="flex items-center gap-3 text-base font-medium text-slate-500 xl:gap-4">
          <Link className="hover:text-slate-950" href="/about">
            About Me
          </Link>
          <Link className="hover:text-slate-950" href="/project">
            Project
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
