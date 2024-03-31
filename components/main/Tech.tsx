import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../carousel/EmblaCarousel";
import "@/components/carousel/css/base.css";
import "@/components/carousel/css/embla.css";

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  loop: true,
};
const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Tech = () => <EmblaCarousel slides={SLIDES} options={OPTIONS} />;

export default Tech;
