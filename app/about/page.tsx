import SkillBadge from "@/components/SkillBadge";
import {
  databaseSkill,
  frameworkSkill,
  languageSkill,
  toolSkill,
} from "@/data/Data";
import Image from "next/image";
import ProfileImg from "./../../public/profile-bw.jpeg";

export default function About() {
  return (
    <>
      <div
        className="mx-auto min-h-screen w-full px-3 py-20 sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-4/12"
        data-aos="fade-up"
      >
        <div className="mx-auto mt-10 h-80 w-full sm:h-96 sm:w-9/12">
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
        <div className="mx-auto mt-10 w-full">
          <div>
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
          </div>
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
    </>
  );
}
