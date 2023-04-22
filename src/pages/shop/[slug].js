import { useRouter } from "next/router";
import ProductTile from "../../components/Products/ProductTile/ProductTile";
import "react-toastify/dist/ReactToastify.css";
import getEntryById from "../../contentful/client";
import Header from "../../components/Header/Header";
import {
  handleQuantity,
  handleIndicator,
} from "../../components/Products/util/stock.util";
import { useEffect, useState } from "react";
export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
}

export default function ProductDetail({ products }) {
  const router = useRouter();
  const productType = router.query.slug;
  const [filtered, setFiltered] = useState([]);

  const handleProducts = (catalog) => {
    if (productType === "lobsters") {
      return catalog.products.filter(
        (item) => item.fields.category === "lobster"
      );
    } else if (productType === "shrimps") {
      return catalog.products.filter(
        (item) => item.fields.category === "shrimp"
      );
    } else if (productType === "crabs") {
      return catalog.products.filter((item) => item.fields.category === "crab");
    } else if (productType === "fish") {
      return catalog.products.filter((item) => item.fields.category === "fish");
    }
  };

  useEffect(() => {
    if(!products) return
    setFiltered(handleProducts(products));
  },[products])

  return (
    <main className="min-h-screen w-screen">
      <Header {...products} />
      <div className="min-h-screen max-w-contentContainer m0a py-10 flex flex-wrap gap-[20px] justify-center lgl:justify-start">
        {filtered &&
          filtered.map((product, i) => {
            const { description, name, price, quantity, type } = product.fields;
            const { url } = product.fields.image.fields.file;
            return (
              <div key={`product-${i}`}>
                <ProductTile
                  width={170}
                  height={200}
                  id={product.sys.id}
                  description={description}
                  name={name}
                  price={price}
                  quantity={quantity}
                  quantityTag={handleQuantity(quantity)}
                  quantityColor={handleIndicator(quantity)}
                  type={type}
                  imgUrl={url}
                />
              </div>
            );
          })}
      </div>
    </main>
  );
}
