import ProductTile from "../ProductTile/ProductTile";
import ProductNavigation from "../Product_Navigation/ProductNavigation";
import { useState } from "react";

const Products = ({ products }) => {
  return (
    <div>
      <ProductNavigation />
      <ul className="grid grid-cols-2 gap-[5px] px-2 pt-2 pb-5">
        {products.map((product, i) => (
          <ProductTile key={`product-${i}`} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
