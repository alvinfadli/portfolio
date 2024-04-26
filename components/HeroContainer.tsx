import { user } from "@/data/Data";
import Hero from "./ui/Hero";

const HeroContainer = () => {
  return (
    <div>
      <Hero user={user} />
    </div>
  );
};

export default HeroContainer;
