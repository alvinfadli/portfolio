import React from "react";
import { Icon } from "@iconify/react";

interface BadgeProps {
  text: string;
  icon: string;
}

const Badge: React.FC<BadgeProps> = ({ text, icon }) => {
  return (
    <div className="flex gap-1.5 items-center pb-1.5">
      <Icon icon={icon} width={"1.5em"} height={"1.5em"} />
      <p>{text}</p>
    </div>
  );
};

export default Badge;
