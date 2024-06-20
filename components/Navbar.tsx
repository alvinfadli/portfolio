"use client";
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
        <a
          className="rounded-[5px] bg-slate-800 px-2 pt-1 text-center font-serif text-2xl font-bold text-white"
          href="/"
        >
          A
        </a>
        <div className="flex items-center gap-3 text-base xl:gap-4">
          <a className="" href="/about">
            About Me
          </a>
          <a className="" href="/project">
            Project
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
