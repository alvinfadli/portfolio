"use client";
import { DM_Serif_Display } from "next/font/google";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { useState, useEffect } from "react";

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 py-6 bg-transparent ${
        scrolled
          ? "bg-white/70 dark:bg-black/70 backdrop-blur "
          : "bg-transparent"
      }`}
    >
      <div className="w-full sm:w-11/12 2xl:w-9/12  flex justify-between  items-center mx-auto px-3">
        <Link
          href={"/"}
          className={`${dm_serif.className} text-3xl text-center`}
        >
          Alvin.
        </Link>
        <div className="flex items-center gap-3 xl:gap-4 ">
          <Link href={"/about"}>About Me</Link>
          <p>Project</p>
          <p>Achivement</p>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
