import React from "react";

/* Footer UI Component */

interface FooterProps {
  className?: string;
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ className = "", children }) => (
  <div className="mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-8/12 p-4 py-6 lg:py-8 ">
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className={`${className} flex sm:items-center justify-between px-5`}>
      {children}
    </div>
  </div>
);

export default Footer;
