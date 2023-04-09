import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "@/redux/reducers/cartSlice";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Success() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart(products));
  }, []);

  return (
    <div className="items-center">
      <Header />
      <main className="justify-center w-screen h-[100vh] text-white text-3xl">
        <div className="flex flex-col max-w-contentContainer">
          <h1 className="w-screen text-center pb-4">
            Success, your order has been placed!
          </h1>
          <p className="text-center">
            Thank you for shopping with us. We&#39;ll send a confirmation once
            your item(s) has shipped.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
