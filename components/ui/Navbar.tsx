import React from "react";

/* Navbar UI Component */

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ children, className = "" }) => {
  return (
    <nav
      className={`${className} fixed w-full shadow-b-sm p-2 xl:p-4 z-50 border-solid border-b backdrop-b-blur-md bg-white/50`}
    >
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 flex justify-between  items-center mx-auto px-3">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
