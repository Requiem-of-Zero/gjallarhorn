import { useState } from "react";
import EmptyResults from "../404/EmptyResults";
import ProductNavigation from "./Product_Navigation/ProductNavigation";
import ProductTile from "./ProductTile/ProductTile";
import { handleIndicator, handleQuantity } from "./util/stock.util";

const Products = ({ products }) => {
  const [currProducts, setCurrProducts] = useState(products);
  const [filtered, setFiltered] = useState(products);
  const [active, setActive] = useState('');
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
        } gap-[5px] pt-2 pb-5 max-w-contentContainer min-h-[50vh] px-1`}
      >
        {filtered.length ? (
          filtered.map((product, i) => {
            const { description, name, price, quantity, type } = product.fields;
            const { url } = product.fields.image.fields.file;
            return (
              <ProductTile
                key={`product-${i}`}
                description={description}
                id={product.sys.id}
                name={name}
                price={price}
                quantity={quantity}
                quantityTag={handleQuantity(quantity)}
                quantityColor={handleIndicator(quantity)}
                type={type}
                imgUrl={url}
                height={200}
                width={170}
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
