import React from "react";

/* Navbar UI Component */

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ children, className = "" }) => {
  return (
    <nav
      className={`${className} fixed w-full shadow-sm p-2 xl:p-4 z-50 border-solid border-b backdrop-blur-md bg-white/50`}
    >
      <div className="w-full flex justify-between  items-center xl:w-8/12 mx-auto px-3">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
