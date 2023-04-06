import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Slide from "./Slide";

const Banner = ({banners}) => {
  return (
    <Splide
      options={{
        autoplay: true,
        rewind: true,
        arrows: false,
        type: "fade",
        speed: 200,
      }}
      id="banner-slider"
      aria-label="My Gundams"
    >
      {banners.map((banner, i) => <Slide key={`banner-${i}`}{...banner}/>)}
    </Splide>
  );
};

export default Banner;
