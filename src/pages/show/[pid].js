import { useRouter } from "next/router";
import getEntryById from "../../contentful/client";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Image from "next/image";
import Stock from "../../components/StockIndicator/Stock";
import {
  handleQuantity,
  handleIndicator,
} from "../../components/Products/util/stock.util";

export async function getServerSideProps(context) {
  const product = await getEntryById(context.query.pid);
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");
  return {
    props: {
      product,
      products,
    },
  };
}

export default function ProductShow({ product, products }) {
  const { url } = product.image.file;
  console.log(product);
  const { description, name, price, quantity, type } = product;
  const [quantityTag, quantityColor] = [
    handleQuantity(quantity),
    handleIndicator(quantity),
  ];
  return (
    <div>
      <Header {...products} />
      <div className="min-h-screen w-screen flex justify-center">
        <div className="max-w-contentContainer flex min-h-screen">
          <div className="py-5">
            <Image src={`http:${url}`} height={500} width={500} />
          </div>
          <div id="product_description" className="px-10 py-5 w-[500px]">
            <h1 className="text-3xl font-bold text-white">{`${name}`}</h1>
            <div id="product_price_stock" className="text-light-grey flex justify-between w-[100%] pt-5">
              <p>${price}</p>
              <Stock quantityTag={quantityTag} quantityColor={quantityColor} />
            </div>
            <h2 className="text-2xl font-semibold text-light-grey">{`${description}`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
