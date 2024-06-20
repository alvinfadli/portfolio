import SkillBadge from "@/components/SkillBadge";
import {
  databaseSkill,
  frameworkSkill,
  languageSkill,
  toolSkill,
} from "@/data/Data";
import Image from "next/image";
import ProfileImg from "@/public/profile-square.jpeg";

export default function About() {
  return (
    <>
      <div className="mx-auto w-full px-3">
        {/* <div className="mx-auto mt-10 h-80 w-full">
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
        </div> */}
        <div className="flex flex-col py-10">
          <h1 className="text-2xl font-bold">About Me</h1>
        </div>
        <div className="mx-auto flex w-full flex-col gap-5 lg:flex-row">
          <div className="flex justify-center">
            <div>
              <Image
                className="object-cover"
                src={ProfileImg}
                alt="profile img"
                width={500}
                height={500}
                sizes="100vw"
                placeholder="blur"
                priority
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="px-3 text-justify md:px-8">
            <p>
              Hello there! My name is{" "}
              <span className="font-bold">Alvin Fadli Dwi Mulya</span>, Alvin
              for short. Born and raised in{" "}
              <span className="font-bold">Padang, Indonesia</span>.
            </p>
            <br />
            <p>
              I&apos;m a final year student in Politeknik Negeri Padang majoring
              in Software Engineering Technology. I have one year of
              professional working experience as a{" "}
              <span className="font-bold">Software Engineer</span>, working on
              both frontend and backend development.
            </p>
            <br />
            <div className="mt-5 flex w-full flex-wrap gap-8">
              <div className="">
                <h2 className="pb-2 font-semibold">Languages</h2>
                <SkillBadge skills={languageSkill} />
              </div>
              <div className="">
                <h2 className="pb-2 font-semibold">Frameworks</h2>
                <SkillBadge skills={frameworkSkill} />
              </div>
              <div className="">
                <h2 className="pb-2 font-semibold">Databases</h2>
                <SkillBadge skills={databaseSkill} />
              </div>
              <div className="">
                <h2 className="pb-2 font-semibold">Tools</h2>
                <SkillBadge skills={toolSkill} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
