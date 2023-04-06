import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Banner = () => {
  return (
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img
            src="https://images4.alphacoders.com/715/thumb-1920-715075.png"
            alt="Gundam 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://i.pinimg.com/originals/c3/31/d0/c331d019b99c441ce88e9f2628594b03.jpg"
            alt="Gundam 2"
          />
        </SplideSlide>
      </Splide>
  );
};

export default Banner;
