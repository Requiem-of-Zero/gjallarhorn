import { useEffect } from "react";

const ProductNavigation = ({ setActive, active, setFiltered, products }) => {
  useEffect(() => {
    if (active === 0) {
      setFiltered(products);
      return;
    }
    const filtered = products.filter((product) => product.type === active);
    setFiltered(filtered);
  }, [active]);

  return (
    <div className="m0a bg-grey text-grey scrollbar-hide z-10 flex w-full whitespace-nowrap border-b border-t border-solid overflow-x-scroll overflow-y-hidden top-header lg:top-header-desktop sticky top-[38px] max-w-contentContainer sml:justify-center w-full">
      <ul className="flex gap-[30px] px-[20px] tracking-widest text-white font-[100] md:items-center md:justify-center">
        <li
          onClick={() => setActive(0)}
          className={`py-2 ${active === 0 ? "border-b-4 border-blue" : ""}`}
        >
          ALL
        </li>
        <li
          onClick={() => setActive(1)}
          className={`py-2 ${active === 1 ? "border-b-4 border-blue" : ""}`}
        >
          SOLD OUT
        </li>
        <li
          onClick={() => setActive(2)}
          className={`py-2 ${active === 2 ? "border-b-4 border-blue" : ""}`}
        >
          LOBSTERS
        </li>
        <li
          onClick={() => setActive(3)}
          className={`py-2 ${active === 3 ? "border-b-4 border-blue" : ""}`}
        >
          CRABS
        </li>
        <li
          onClick={() => setActive(4)}
          className={`py-2 ${active === 4 ? "border-b-4 border-blue" : ""}`}
        >
          SHRIMPS
        </li>
      </ul>
    </div>
  );
};

export default ProductNavigation;
