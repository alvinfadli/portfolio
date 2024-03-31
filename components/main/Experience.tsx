import React from "react";
import { DM_Serif_Display } from "next/font/google";

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Experience = () => (
  <div className="flex justify-center mb-20">
    <div id="" className="w-full z-10  px-5 pt-5 flex flex-col md:px-10">
      <h1 className={`${dm_serif.className} text-3xl text-center mb-5`}>
        Experiences
      </h1>
      <div
        className="flex w-full xl:w-8/12 mx-auto border-t py-5"
        data-aos="fade-up"
      >
        <div className="w-9 h-9 mr-4 mt-2">
          <img
            src="equnix-logo.png"
            alt="img"
            className=" object-cover w-full h-full"
          />
        </div>

        <div className="w-11/12 md:w-full">
          <h3 className="font-semibold">Software Engineer ‧ Internship</h3>
          <p className="">Equnix Business Solutions, PT</p>
          <p className="">Jakarta, Indonesia | Nov 2023 - Mar 2024</p>
          <ul className="list-disc pl-5">
            <li>
              Developed internal management website, working as frontend
              developer using Javascript/Typescript and Svelte framework
            </li>
            <li>
              Conduct research related to PostgreSQL with guidance of mentor and
              CTO
            </li>
          </ul>
          <div className="flex flex-wrap gap-1 mt-2 text-white text-sm">
            <p className="bg-zinc-400  px-2 rounded">Typescript</p>
            <p className="bg-zinc-400  px-2 rounded">Linux</p>
            <p className="bg-zinc-400  px-2 rounded">PostgreSQL</p>
            <p className="bg-zinc-400  px-2 rounded">Svelte</p>
          </div>
        </div>
      </div>
      <div className="flex w-full xl:w-8/12 mx-auto border-t py-5">
        <div className="w-9 h-9 mr-4 mt-2">
          <img
            src="sagara-logo.png"
            alt="img"
            className=" object-cover w-full h-full"
          />
        </div>

        <div className="w-11/12 md:w-full">
          <h3 className="font-semibold">Software Engineer ‧ Internship</h3>
          <p className="">Sagara Technology</p>
          <p className="">Bandung, Indonesia | Aug 2023 - Nov 2023</p>
          <ul className="list-disc pl-5">
            <li>
              Developed{" "}
              <a className="text-blue-600" href="https://teknologi.id/">
                Teknologi.id
              </a>{" "}
              platform, working as a fullstack developer using Vue, Quasar,
              Javascript, and Laravel
            </li>
          </ul>
          <div className="flex flex-wrap gap-1 mt-2 text-white text-sm">
            <p className="bg-zinc-400  px-2 rounded">Docker</p>
            <p className="bg-zinc-400  px-2 rounded">Git</p>
            <p className="bg-zinc-400  px-2 rounded">Laravel</p>
            <p className="bg-zinc-400  px-2 rounded">React</p>
            <p className="bg-zinc-400  px-2 rounded">Vue</p>
            <p className="bg-zinc-400  px-2 rounded">Node JS</p>
            <p className="bg-zinc-400  px-2 rounded">Quasar</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
