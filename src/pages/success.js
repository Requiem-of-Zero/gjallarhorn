import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/reducers/cartSlice";
import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";

export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
}

export default function Success({ products }) {
  const cartProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart(cartProducts));
  }, []);

  return (
    <div className="items-center">
      <Header {...products} />
      <main className="flex justify-center h-screen items-center text-white text-3xl">
        <div className="flex flex-col max-w-contentContainer">
          <h1 className="pb-4 text-center">
            Success, your order has been placed!
          </h1>
          <p className="text-center">
            Thank you for shopping with us. We&#39;ll send a confirmation once
            your item(s) has shipped.
          </p>
        </div>
      </main>
    </div>
  );
}
