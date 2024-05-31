import User from "@/types/User";
import Skill from "@/types/Skill";
import Project from "@/types/Project";

export const user: User = {
  name: "Alvin Fadli Dwi Mulya",
  title: "Software Engineer",
  email: "alvin.fadli@outlook.com",
  description:
    "Final-year software engineering technology student with one year of professional experience. Skilled in frontend development, specifically with React and Svelte. Looking to apply my skills and knowledge in a collaborative environment.",
  github_link: "https://github.com/alvinfadli",
  linked_link: "https://www.linkedin.com/in/alvinfadli/.",
  cv_link: "https://www.google.com",
};

export const languageSkill: Skill[] = [
  { icon: "mdi:language-java", text: "Java" },
  { icon: "mdi:language-python", text: "Python" },
  { icon: "mdi:language-php", text: "PHP" },
  { icon: "mdi:language-javascript", text: "Javascript" },
  { icon: "mdi:language-typescript", text: "Typescript" },
];

export const frameworkSkill: Skill[] = [
  { icon: "mdi:react", text: "React" },
  { icon: "ri:nextjs-fill", text: "Next" },
  { icon: "mdi:laravel", text: "Laravel" },
  { icon: "akar-icons:link-chain", text: "Langchain" },
];

export const databaseSkill: Skill[] = [
  { icon: "fontisto:mysql", text: "MySQL" },
  { icon: "akar-icons:postgresql-fill", text: "PostgreSQL" },
  { icon: "simple-icons:mongodb", text: "MongoDB" },
];

export const toolSkill: Skill[] = [
  { icon: "mdi:git", text: "Git" },
  { icon: "mdi:github", text: "Github" },
  { icon: "simple-icons:postman", text: "Postman" },
  { icon: "solar:figma-bold", text: "Figma" },
  { icon: "fluent-emoji-high-contrast:hugging-face", text: "Huggingface" },
];

export const project: Project[] = [
  {
    title: "Sibi sign",
    desc: "Sibi signs is a web-based application that utilizes Computer Vision technology to classify Indonesian SIBI-styled sign language.",
    imgSrc: "sibi-sign.png",
    projectLink: "https://github.com/alvinfadli/sibi-sign",
  },
];
