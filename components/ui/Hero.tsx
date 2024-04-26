import React from "react";
import Button from "@/components/ui/Button";
import User from "@/types/User";
import { useRouter } from "next/navigation";

/* Hero UI Component */

interface HeroProps {
  user: User;
}

const Hero = ({ user }: HeroProps) => {
  const router = useRouter();

  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-5">
      <div className={`flex w-full`}>
        <div className="w-7/12 flex flex-col justify-center">
          <h1 className="text-6xl font-serif font-bold mb-2">{user?.name}</h1>
          <p className="mb-5 font-semibold">{user?.title}</p>
          <p className="mb-2">{user?.description}</p>
          <div>
            <Button
              text="Download CV"
              onClick={() => router.push(user?.cv_link)}
            />
          </div>
        </div>
        <div className="w-5/12">
          <img src="hero-image.png" alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
