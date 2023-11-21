/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import TypingAnimation from "../../components/TypingAnimation";
import mainBg from "../../assets/main-bg.jpg";

function Landing() {
  const [activeNavItem, setActiveNavItem] = useState("about-me");

  const handleNavItemClick = (id) => {
    setActiveNavItem(id);
  };
  // Preload the main background image before the component is mounted
  useEffect(() => {
    const navItems = [
      "about-me",
      "experience",
      "education",
      "portfolio",
      "activities",
    ];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNavItem(entry.target.id);
        }
      });
    }, options);

    navItems.forEach((id) => {
      const target = document.getElementById(id);
      if (target) {
        observer.observe(target);
      }
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="bg-transparent fixed top-0 left-0 w-[100vw] flex items-center z-10">
        <div className="w-[100vw]">
          <nav className="">
            <ul className="hidden md:visible md:flex py-5">
              <li className="mx-auto text-white font-title">
                <a
                  href="#about-me"
                  className={`px-5 hover:text-zinc-600 ${
                    activeNavItem === "about-me" ? "text-zinc-500" : ""
                  }`}
                  onClick={() => handleNavItemClick("about-me")}
                >
                  About Me
                </a>
                <a
                  href="#experience"
                  className={`px-5 hover:text-zinc-600 ${
                    activeNavItem === "experience" ? "text-zinc-500" : ""
                  }`}
                  onClick={() => handleNavItemClick("experience")}
                >
                  Experience
                </a>
                <a
                  href="#education"
                  className={`px-5 hover:text-zinc-600 ${
                    activeNavItem === "education" ? "text-zinc-500" : ""
                  }`}
                  onClick={() => handleNavItemClick("education")}
                >
                  Education
                </a>
                <a
                  href="#portfolio"
                  className={`px-5 hover:text-zinc-600 ${
                    activeNavItem === "portfolio" ? "text-zinc-500" : ""
                  }`}
                  onClick={() => handleNavItemClick("portfolio")}
                >
                  Portfolio
                </a>
                <a
                  href="#activities"
                  className={`px-5 hover:text-zinc-600 ${
                    activeNavItem === "activities" ? "text-zinc-500" : ""
                  }`}
                  onClick={() => handleNavItemClick("activities")}
                >
                  Activities
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:flex w-11/12 mx-auto border-solid border-b-2 border-slate-50"></div>
        </div>
      </header>
      <div className="w-full bg-img">
        <div className="snap-y snap-mandatory h-screen w-full mx:auto scroll-smooth overflow-y-scroll">
          <div
            id="about-me"
            className="relative snap-center bg-slate-950 shrink-0 h-screen flex my-auto items-center justify-center font-title main-page"
            style={{ backgroundImage: `url(${mainBg})` }}
          >
            <img src={`${mainBg}`} style={{ display: "none" }} />
            <div className="overlay-container">
              <div className="dark-overlay -z-5"></div>
              <div className=" text-white absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="w-max first-letter:text-center text-3xl md:text-6xl pb-6 font-normal">
                  Alvin Fadli Dwi Mulya
                </h1>
                <div className="w-max mx-auto">
                  <h1 className="font-thin">
                    <TypingAnimation />
                  </h1>
                </div>
                <div className="pt-10">
                  <div className="flex items-center justify-center">
                    <a
                      className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 text-slate-400 hover:border-primary hover:bg-primary hover:text-white"
                      href="https://github.com/AlvinFadli"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="fill-current"
                        role="img"
                        width="25"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <a
                      className="w-9 h-9 rounded-full flex justify-center items-center border border-slate-400 text-slate-400 hover:border-primary hover:bg-primary hover:text-white"
                      href="https://www.linkedin.com/in/alvinfadli"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className="fill-current"
                        width="20"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        // eslint-disable-next-line react/no-unknown-property
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 310 310"
                        xmlSpace="preserve"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="XMLID_801_">
                            <path
                              id="XMLID_802_"
                              d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                            ></path>
                            <path
                              id="XMLID_803_"
                              d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                            ></path>
                            <path
                              id="XMLID_804_"
                              d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-white absolute bottom-20 mx-auto icon-container ">
              <a href="#experience">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            id="experience"
            className="snap-center shrink-0 bg-zinc-900 h-screen px-5 pt-5 md:pt-20 flex justify-center md:px-10"
          >
            <div className="md:pt-5 md:w-7/12">
              <h1 className="text-center text-3xl pb-5 text-white font-bold visible md:hidden">
                Experience
              </h1>
              <div className="flex mb-6">
                <div className="w-9 h-9 mr-4 mt-2">
                  <img
                    src="sagara_logo.png"
                    alt="img"
                    className=" object-cover w-full h-full"
                  />
                </div>
                <div className="w-11/12 md:w-full">
                  <h3 className="text-xl font-semibold">
                    Software Engineer ‧ Internship
                  </h3>
                  <p className="text-gray-300">Sagara Technology</p>
                  <p className="text-gray-100">
                    Bandung, Indonesia | Aug 2022 - Present
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Created RESTful API for Teknologi.id using Laravel,
                      Node.JS and PostgreSQL
                    </li>
                    <li>
                      Developed user interfaces (UI) using Vue.js and the Quasar
                      Framework.
                    </li>
                    <li>Fixing bugs on several Teknologi.id features.</li>
                  </ul>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <p className="bg-zinc-600 px-2 rounded-lg">Docker</p>
                    <p className="bg-zinc-600 px-2 rounded-lg px-2">Git</p>
                    <p className="bg-zinc-600 px-2 rounded-lg px-2">Laravel</p>
                    <p className="bg-zinc-600 px-2 rounded-lg px-2">React</p>
                    <p className="bg-zinc-600 px-2 rounded-lg px-2">Vue</p>
                    <p className="bg-zinc-600 px-2 rounded-lg">Node JS</p>
                    <p className="bg-zinc-600 px-2 rounded-lg">Quasar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="education"
            className="snap-center shrink-0 bg-zinc-900 h-screen px-5 pt-5 md:pt-20 flex justify-center md:px-10"
          >
            <div className="md:pt-5 md:w-7/12">
              <h1 className="text-center text-3xl pb-5 text-white font-bold visible md:hidden">
                Education
              </h1>
              <div className="flex mb-6">
                <div className="w-10 h-10 mr-4 mt-3">
                  <img
                    src="pnp_logo.png"
                    alt="Job 1 Image"
                    className=" object-cover w-full h-full"
                  />
                </div>
                <div className="w-11/12 md:w-full">
                  <h3 className="text-xl font-semibold">
                    Software Engineering Technology
                  </h3>
                  <p className="text-gray-300">Politeknik Negeri Padang</p>
                  <p className="text-gray-100">
                    Padang, Indonesia | Aug 2022 - Present
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Most Outstanding Student of Information Technology
                      Department 2022
                    </li>
                    <li>
                      Winning Silver Medal SAFE-Network & Maejo University
                      Product Innovation Competition 2023 in Chiang Mai,
                      Thailand
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex mb-6">
                <div className="w-9 h-9 mr-4 mt-2">
                  <img
                    src="iu_logo.png"
                    alt="Job 2 Image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-11/12 md:w-full">
                  <h3 className="text-xl font-semibold">Computer Science</h3>
                  <p className="text-gray-300">
                    IU International University of Applied Sciences
                  </p>
                  <p className="text-gray-100">
                    Bad Honnef, Germany | Oct 2022 - Mar 2023
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Awardee of Indonesian International Student Mobility
                      Awards (IISMA) Vocational Edition
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id="portfolio"
            className="snap-center shrink-0 bg-neutral-900  h-screen flex items-center justify-center text-xl md:text-3xl"
          >
            Still working on this
          </div>
          <div
            id="activities"
            className="snap-center shrink-0 bg-neutral-800  h-screen flex items-center justify-center text-xl md:text-3xl"
          >
            Still working on this
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
