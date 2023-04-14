import { useRouter } from "next/router";
import getEntryById from "../../contentful/client";
import { useEffect } from "react";
import Header from "../../components/Header/Header";

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
  console.log(product);
  return (
    <div>
      <Header {...products} />
      <div className="min-h-screen w-screen">Show Page</div>
    </div>
  );
}
