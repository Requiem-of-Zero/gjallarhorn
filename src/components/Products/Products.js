import ProductTile from "../ProductTile/ProductTile";

const Products = ({ products }) => {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-[5px] px-2 py-2">
        {products.map((product, i) => (
          <ProductTile key={`product-${i}`} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
