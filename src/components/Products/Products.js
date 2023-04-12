import { useState } from "react";
import EmptyResults from "../404/EmptyResults";
import ProductTile from "../ProductTile/ProductTile";
import ProductNavigation from "../Product_Navigation/ProductNavigation";

const Products = ({ products }) => {
  const [currProducts, setCurrProducts] = useState(products);
  const [filtered, setFiltered] = useState(products);
  const [active, setActive] = useState(0);
  // type
  // 0 is all
  // 1 is sold out
  // 2 is lobsters
  // 3 is crabs
  // 4 is shrimps
  // 5 is fish
  // 6 is eggs
  return (
    <div>
      <ProductNavigation
        products={currProducts}
        setFiltered={setFiltered}
        active={active}
        setActive={setActive}
      />
      <div
        className={`${
          filtered.length ? "product-grid" : ""
        } gap-[5px] pt-2 pb-5 max-w-contentContainer min-h-[50vh]`}
      >
        {filtered.length ? (
          filtered.map((product, i) => {
            const { description, name, price, quantity, type } = product.fields;
            const { url } = product.fields.image.fields.file;
            return (
              <ProductTile
                key={`product-${i}`}
                description={description}
                id={i}
                name={name}
                price={price}
                quantity={quantity}
                type={type}
                imgUrl={url}
                height={1080}
                width={1920}
              />
            );
          })
        ) : (
          <div className="w-screen flex justify-center">
            <EmptyResults />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
