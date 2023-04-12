import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Slide from "./Slide";

const Banner = ({ banners }) => {
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
      className="max-w-contentContainer m0a cursor-pointer"
    >
      {banners.map((banner, i) => {
        const { url } = banner.fields.img.fields.file;
        const { width, height, altText } = banner.fields;
        return (
          <Slide
            key={`banner-${i}`}
            imgUrl={url}
            width={width}
            height={height}
            altText={altText}
          />
        );
      })}
    </Splide>
  );
};

export default Banner;
