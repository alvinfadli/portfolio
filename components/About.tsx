import SkillBadge from "@/components/SkillBadge";
import {
  databaseSkill,
  frameworkSkill,
  languageSkill,
  toolSkill,
} from "@/data/Data";
import Image from "next/image";
import ProfileImg from "./../public/profile-bw.jpeg";

// TODO: add project, contact, skills to the page
export default function About() {
  return (
    <>
      <div className="bg-slate-50  w-full">
        <div className="py-20 w-full md:w-8/12 mx-auto px-5 md:px-0 border-l border-dashed">
          <h1 className="font-semibold text-sky-600 text-lg pl-5">About Me</h1>
          <div className="flex flex-col-reverse md:flex-row pt-5 gap-5 pl-5">
            <div className="w-full md:w-7/12 pt-2 ">
              <div>
                <p>
                  Hello there! My name is{" "}
                  <span className="font-bold">Alvin Fadli Dwi Mulya</span>,
                  Alvin for short. Born and raised in{" "}
                  <span className="font-bold">Padang, Indonesia</span>.
                </p>
                <br />
                <p>
                  I&apos;m a final year student in Politeknik Negeri Padang
                  majoring in Software Engineering Technology. I have one year
                  of professional working experience as a{" "}
                  <span className="font-bold">Software Engineer</span>, working
                  on both frontend and backend development.
                </p>
                <br />
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
            <div className="flex justify-end w-full md:h-full md:w-5/12">
              <div className="w-full h-80 md:h-96">
                <Image
                  className="object-cover"
                  src={ProfileImg}
                  alt="profile img"
                  width={320}
                  height={320}
                  sizes="100vw"
                  placeholder="blur"
                  priority
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
