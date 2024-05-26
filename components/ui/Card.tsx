import React from "react";

/* Card UI Component */

interface CardProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`${className}  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Card;
