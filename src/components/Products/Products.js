import ProductTile from "../ProductTile/ProductTile";
import ProductNavigation from "../Product_Navigation/ProductNavigation";
import { useState } from "react";

const Products = ({ products }) => {
  const [currProducts, setCurrProducts] = useState(products);
  const [filtered, setFiltered] = useState(products);
  const [active, setActive] = useState(0);
  // 0 is all
  // 1 is sold out
  // 2 is lobsters
  // 3 is crabs
  // 4 is shrimps
  return (
    <div>
      <ProductNavigation
        products={currProducts}
        setFiltered={setFiltered}
        active={active}
        setActive={setActive}
      />
      <ul className="grid grid-cols-2 gap-[5px] px-2 pt-2 pb-5">
        {filtered.map((product, i) => (
          <ProductTile key={`product-${i}`} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
