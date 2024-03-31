import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode; // Optional icon
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  variant,
  icon,
}) => {
  const classNames = `button ${variant || "primary"}`;

  return (
    <button
      className={`${classNames} flex border hover:bg-slate-900 py-3 text-sm justify-center items-center px-6 rounded font-medium bg-slate-800 text-white shadow-md`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <span className="button-icon pr-1 flex justify-center items-center ">
          {icon}
        </span>
      )}
      {text}
    </button>
  );
};

export default Button;
