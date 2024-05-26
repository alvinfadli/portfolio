import Skill from "@/types/Skill";
import React from "react";
import Badge from "./ui/Badge";

interface SkillBadgeProps {
  skills: Skill[];
}

const SkillBadge = ({ skills }: SkillBadgeProps) => {
  if (!skills || skills.length === 0) {
    return <div>No skills available</div>;
  }

  return (
    <div>
      {skills.map((skill, index) => (
        <Badge key={index} icon={skill.icon} text={skill.text} />
      ))}
    </div>
  );
};

export default SkillBadge;
