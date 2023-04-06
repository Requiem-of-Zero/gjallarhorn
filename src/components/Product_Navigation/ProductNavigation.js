import { useState } from "react";

const ProductNavigation = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-grey text-grey scrollbar-hide z-10 flex w-full whitespace-nowrap border-b border-t border-solid overflow-x-scroll overflow-y-hidden top-header lg:top-header-desktop sticky top-[38px] lg:w-full">
      <ul className="flex gap-[30px] px-[20px] tracking-widest text-white font-[100]">
        <li
          onClick={() => setSelected(0)}
          className={`py-2 ${selected === 0 ? "border-b-4 border-blue" : ""}`}
        >
          ALL
        </li>
        <li
          onClick={() => setSelected(1)}
          className={`py-2 ${selected === 1 ? "border-b-4 border-blue" : ""}`}
        >
          SOLD OUT
        </li>
        <li
          onClick={() => setSelected(2)}
          className={`py-2 ${selected === 2 ? "border-b-4 border-blue" : ""}`}
        >
          LOBSTERS
        </li>
        <li
          onClick={() => setSelected(3)}
          className={`py-2 ${selected === 3 ? "border-b-4 border-blue" : ""}`}
        >
          CRABS
        </li>
        <li
          onClick={() => setSelected(4)}
          className={`py-2 ${selected === 4 ? "border-b-4 border-blue" : ""}`}
        >
          SHRIMPS
        </li>
      </ul>
    </div>
  );
};

export default ProductNavigation;
