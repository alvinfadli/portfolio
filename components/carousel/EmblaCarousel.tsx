import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import techData from "./techData";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {techData?.map((item) => (
            <div className="embla__slide w-full mx-auto " key={item.id}>
              <div className="embla__slide__number w-10 xl:w-12 mx-auto ">
                {item.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
