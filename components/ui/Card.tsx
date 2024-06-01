import React from "react";

/* Card UI Component */

interface CardProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, onClick, className = "" }) => {
  return (
    <button className={`${className} `} onClick={onClick}>
      {children}
    </button>
  );
};

export default Card;
