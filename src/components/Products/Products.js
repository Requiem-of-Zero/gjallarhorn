import { addToCart } from "@/redux/reducers/cartSlice";
import { useState } from "react";
import EmptyResults from "../404/EmptyResults";
import ProductTile from "../ProductTile/ProductTile";
import ProductNavigation from "../Product_Navigation/ProductNavigation";

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
      <div className="product-grid gap-[5px] pt-2 pb-5 max-w-contentContainer">
        {filtered.length ? (
          filtered.map((product, i) => (
            <ProductTile
              key={`product-${i}`}
              {...product}
            />
          ))
        ) : (
          <EmptyResults />
        )}
      </div>
    </div>
  );
};

export default Products;
