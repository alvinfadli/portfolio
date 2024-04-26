import React from "react";

/* Button UI Component */

interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
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
      className={`${classNames} flex hover:bg-slate-900 py-1.5 text-sm justify-center items-center px-6 rounded font-medium bg-slate-800 text-white shadow-md`}
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
