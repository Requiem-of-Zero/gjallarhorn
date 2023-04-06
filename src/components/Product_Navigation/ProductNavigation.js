import { useRef } from "react";

const ProductNavigation = () => {
  const navButton = useRef();

  const scroll = (scrollOffset) => {
    navButton.current.scrollLeft += scrollOffset
  }
  return (
    <div className="bg-grey text-grey scrollbar-hide z-10 flex w-full whitespace-nowrap border-b border-t border-solid overflow-x-scroll overflow-y-hidden top-header lg:top-header-desktop sticky lg:w-full">
      <ul className="flex gap-[30px] px-[20px] tracking-widest text-white font-[100]">
        <li
          className="py-2 border-b-4 border-blue"
          ref={navButton}
          onClick={() => scroll(-20)}
        >
          SALE
        </li>
        <li
          className="py-2 border-b-4 border-blue"
          ref={navButton}
          onClick={() => scroll(-20)}
        >
          SOLD OUT
        </li>
        <li
          className="py-2 border-b-4 border-blue"
          ref={navButton}
          onClick={() => scroll(20)}
        >
          LOBSTERS
        </li>
        <li
          className="py-2 border-b-4 border-blue"
          ref={navButton}
          onClick={() => scroll(20)}
        >
          CRABS
        </li>
        <li
          className="py-2 border-b-4 border-blue"
          ref={navButton}
          onClick={() => scroll(20)}
        >
          SHRIMPS
        </li>
      </ul>
    </div>
  );
};

export default ProductNavigation;