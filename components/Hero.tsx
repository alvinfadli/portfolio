import React from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { user } from "@/data/Data";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative py-20 md:py-0 md:h-screen flex flex-col items-center justify-center px-5">
      <div className={`flex w-full`}>
        <div className="w-full  flex flex-col justify-center ">
          <h1 className="text-2xl md:text-3xl xl:text-7xl font-serif font-bold mb-2 ">
            {user?.name}
          </h1>
          <p className="mb-5 font-semibold">{user?.title}</p>
          <p className="mb-2">{user?.description}</p>
          <div className="mt-5">
            <Button
              text="Download CV"
              onClick={() => router.push(user?.cv_link)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
