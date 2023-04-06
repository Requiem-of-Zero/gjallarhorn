import { SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

const Slide = ({imgUrl, height, width, altText}) => {
  return (
    <SplideSlide>
      <Image
        width={width}
        height={height}
        src={imgUrl}
        alt={altText}
      />
    </SplideSlide>
  );
}

export default Slide