import { useRouter } from "next/router";
import ProductTile from "../../components/ProductTile/ProductTile";
import "react-toastify/dist/ReactToastify.css";
import getEntryById from "../../contentful/client";
import Header from "../../components/Header/Header";

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

  const handleProducts = (catalog) => {
    if (productType === "lobsters") {
      return catalog.products.filter((item) => item.fields.type === 2);
    } else if (productType === "shrimps") {
      return catalog.products.filter((item) => item.fields.type === 4);
    } else if (productType === "crabs") {
      return catalog.products.filter((item) => item.fields.type === 3);
    } else if (productType === "fish") {
      return catalog.products.filter((item) => item.fields.type === 5);
    }
  };

  const filteredProducts = handleProducts(products);

  return (
    <main className="min-h-screen w-screen">
      <Header {...products}/>
      <div className="min-h-screen py-10 px-10 flex flex-wrap gap-[20px] justify-center lgl:justify-start">
        {filteredProducts &&
          filteredProducts.map((product, i) => {
            const { description, name, price, quantity, type } = product.fields;
            const { url } = product.fields.image.fields.file;
            return(
              <ProductTile
                key={`product-${i}`}
                width={300}
                height={300}
                id={product.sys.id}
                description={description}
                name={name}
                price={price}
                quantity={quantity}
                type={type}
                imgUrl={url}
              />
            )
          })}
      </div>
    </main>
  );
}
