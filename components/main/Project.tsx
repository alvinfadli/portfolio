import React from "react";
import { DM_Serif_Display } from "next/font/google";

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Project = () => (
  <div id="project" className=" flex justify-center my-28 ">
    <div className="w-full z-10">
      <h1 className={`${dm_serif.className} text-3xl text-center`}>Projects</h1>

      {/* <div className="xl:mx-auto flex flex-wrap gap-0 w-full xl:w-9/12">
        <div className="h-full p-2 lg:w-1/3 ">
          <div>
            <div className="relative flex flex-col border-slate-300 border text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
              <div className="relative mx-1 mt-1 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-t-xl ">
                <img
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="profile-picture"
                />
              </div>
              <div className="p-4">
                <h5 className=" mb-2 font-sans text-xl font-semibold text-blue-gray-900">
                  UI/UX Review Check
                </h5>
                <p className=" font-sans text-base ">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to where you can enjoy the main night
                  life in Barcelona.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full p-2 lg:w-1/3">
          <div className="relative flex flex-col border-slate-300 border text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
            <div className="relative mx-1 mt-1 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-t-xl ">
              <img
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-4">
              <h5 className="block mb-2 font-sans text-xl font-semibold text-blue-gray-900">
                UI/UX Review Check
              </h5>
              <p className="block font-sans text-base ">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to where you can enjoy the main night life in
                Barcelona.
              </p>
            </div>
          </div>
        </div>
        <div className="h-full p-2 lg:w-1/3">
          <div className="relative flex flex-col border-slate-300 border text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
            <div className="relative mx-1 mt-1 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-t-xl ">
              <img
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-4">
              <h5 className="block mb-2 font-sans text-xl font-semibold text-blue-gray-900">
                UI/UX Review Check
              </h5>
              <p className="block font-sans text-base ">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to where you can enjoy the main night life in
                Barcelona.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center">
        <div>
          <img width={450} src={"on-progress-img.png"} />
          <p className="text-center -mt-5">Still cooking . . .</p>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
