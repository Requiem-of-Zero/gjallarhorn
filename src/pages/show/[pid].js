import Image from "next/image";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import ProductTile from "../../components/Products/ProductTile/ProductTile";
import Stock from "../../components/Products/StockIndicator/Stock";
import {
  handleIndicator,
  handleQuantity,
} from "../../components/Products/util/stock.util";
import getEntryById from "../../contentful/client";
import Reviews from "../../components/Products/Reviews/Reviews";
import { UserAuth } from "../../context/AuthContext";

export async function getServerSideProps(context) {
  const product = await getEntryById(context.query.pid);
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");
  return {
    props: {
      id: context.query.pid,
      product,
      products: products.products,
    },
  };
}

export default function ProductShow({ product, products, id }) {
  const { url } = product.image.file;
  const { user } = UserAuth();
  const { description, name, price, quantity, type } = product;
  const [quantityTag, quantityColor] = [
    handleQuantity(quantity),
    handleIndicator(quantity),
  ];
  const [loading, setLoading] = useState(false);
  const recommendations = products.filter(
    (product) => product.fields.type === type && product.fields.name !== name
  );
  return (
    <div className="w-screen">
      <Header products={products} />
      <div className="min-h-screen flex justify-center">
        <Loading open={loading} setOpen={setLoading} />
        <div className="flex">
          <div className="py-5">
            <Image src={`http:${url}`} height={500} width={500} />
            <Reviews user={user} productId={id} product={product}/>
          </div>
          <div
            id="product_description"
            className="px-10 py-5 w-[500px] sticky top-[110px] h-[400px]"
          >
            <h1 className="text-3xl font-bold text-white">{`${name}`}</h1>
            <div
              id="product_price_stock"
              className="text-light-grey flex justify-between w-[100%] pt-5"
            >
              <p>${price}</p>
              <Stock quantityTag={quantityTag} quantityColor={quantityColor} />
            </div>
            <h2 className="text-2xl font-semibold text-light-grey">{`${description}`}</h2>
            <Button
              id={id}
              quantity={quantity}
              name={name}
              description={description}
              imgUrl={url}
              price={price}
              setLoading={setLoading}
            />
          </div>
        </div>
        <div id="product_recommendations">
          <h2 className="text-white pt-5">Customers also bought:</h2>
          <div className="pb-5 flex flex-col gap-[20px]">
            {recommendations.map((product, i) => (
              <ProductTile
                key={`reccomendation-${i}`}
                id={product.sys.id}
                name={product.fields.name}
                description={product.fields.description}
                imgUrl={product.fields.image.fields.file.url}
                price={product.fields.price}
                quantity={product.fields.quantity}
                height={100}
                width={100}
                quantityTag={handleQuantity(product.fields.quantity)}
                quantityColor={handleIndicator(product.fields.quantity)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}