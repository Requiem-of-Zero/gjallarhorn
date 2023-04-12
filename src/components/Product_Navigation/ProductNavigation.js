import { useEffect } from "react";

const ProductNavigation = ({ setActive, active, setFiltered, products }) => {
  useEffect(() => {
    if (active === 0) {
      setFiltered(products);
      return;
    }
    const filtered = products.filter((product) => product.fields.type === active);
    setFiltered(filtered);
  }, [active]);

  return (
    <div className="product_navigation m0a bg-grey scrollbar-hide flex w-full whitespace-nowrap border-b border-t border-[#1F2122] border-solid top-header sticky top-[47px] max-w-contentContainer shadow-lg sml:justify-center lgl:top-[119px]">
      <ul id='filter_list'className="flex gap-[30px] px-[20px] pt-2 tracking-widest text-white font-[100] md:items-center md:justify-center">
        <li
          onClick={() => setActive(0)}
          className={`py-2 border-b-4 cursor-pointer select-none ${active === 0 ? "border-blue" : "border-[transparent]"}`}
        >
          ALL
        </li>
        <li
          onClick={() => setActive(1)}
          className={`py-2 border-b-4 cursor-pointer select-none ${
            active === 1 ? "border-blue" : "border-[transparent]"
          }`}
        >
          SOLD OUT
        </li>
        <li
          onClick={() => setActive(2)}
          className={`py-2 border-b-4 cursor-pointer select-none ${
            active === 2 ? "border-blue" : "border-[transparent]"
          }`}
        >
          LOBSTERS
        </li>
        <li
          onClick={() => setActive(3)}
          className={`py-2 border-b-4 cursor-pointer select-none ${
            active === 3 ? "border-blue" : "border-[transparent]"
          }`}
        >
          CRABS
        </li>
        <li
          onClick={() => setActive(4)}
          className={`py-2 border-b-4 cursor-pointer select-none ${
            active === 4 ? "border-blue" : "border-[transparent]"
          }`}
        >
          SHRIMPS
        </li>
      </ul>
    </div>
  );
};

export default ProductNavigation;
