"use client";
import SkillBadge from "@/components/SkillBadge";
import {
  databaseSkill,
  frameworkSkill,
  languageSkill,
  toolSkill,
} from "@/data/Data";
import Image from "next/image";

// TODO: add project, contact, skills to the page
export default function About() {
  console.log(languageSkill);

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="flex  px-3 pt-10 gap-5">
          <div className="w-7/12 pt-2">
            <div>
              <p>
                Hello there! My name is{" "}
                <span className="font-bold">Alvin Fadli Dwi Mulya</span>, Alvin
                for short. Born and raised in{" "}
                <span className="font-bold">Padang, Indonesia</span>.
              </p>
              <br />
              <p>
                I&apos;m a final year student in Politeknik Negeri Padang
                majoring Software Engineering Technology. I have one year of
                professional working experience as a{" "}
                <span className="font-bold">Software Engineer</span>, working on
                both frontend and backend development.
              </p>
              <br />
              <p>
                I have expertise in Next, React, PHP, and Javascript as a
                Fullstack Developer.
              </p>
            </div>
            <div className="flex w-full mt-5 gap-10 flex-wrap">
              <div className="">
                <h2 className="font-semibold pb-2">Languages</h2>
                <SkillBadge skills={languageSkill} />
              </div>
              <div className="">
                <h2 className="font-semibold pb-2">Frameworks</h2>
                <SkillBadge skills={frameworkSkill} />
              </div>
              <div className="">
                <h2 className="font-semibold pb-2">Databases</h2>
                <SkillBadge skills={databaseSkill} />
              </div>
              <div className="">
                <h2 className="font-semibold pb-2">Tools</h2>
                <SkillBadge skills={toolSkill} />
              </div>
            </div>
          </div>
          <div className=" flex justify-end w-5/12">
            <Image
              className="h-auto max-w-xl"
              src="/profile-bw.jpeg"
              alt="image description"
              width={10}
              height={10}
              sizes="100vw"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
