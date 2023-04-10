import EmptyResults from "@/components/404/EmptyResults";
import CartItem from "@/components/CartItem/CartItem";
import Header from "@/components/Header/Header";
import { UserAuth } from "@/context/AuthContext";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import Loading from "@/components/Loading/Loading";

export default function Cart({ toggleTheme }) {
  const stripePromise = loadStripe(`${process.env.stripe_publishable_key}`);
  const products = useSelector((state) => state.products);
  const { user } = UserAuth();
  const [loading, setLoading] = useState(false);

  const calculateCartTotal = (products) => {
    let sum = 0;

    for (const product of products) {
      sum += product.price * product.quantity;
    }

    return sum.toFixed(2);
  };

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: products,
      email: user.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };
  return products.length ? (
    <div className="min-h-[100vh] relative">
    <Loading open={loading} setOpen={setLoading} />
      <Header />
      <div className="w-screen min-h-screen">
        <div className="flex justify-center">
            {/* Desktop Cart Page Header */}
          <div className="py-6 text-white font-bold">
            <h2 id="desktop_checkout" className="pb-1 text-3xl cursor-default">
              YOUR BAG
            </h2>
            {/* End Desktop Cart Header */}
            <ul className="flex flex-col gap-[20px]">
              {/* Mobile Checkout Block */}
              <div id="mobile_checkout" className="sticky top-[48px]">
                <h2 className="text-center pb-1 text-4xl cursor-default">
                  YOUR BAG
                </h2>
                {/*  */}
                <div>
                  <p className="text-center">
                    Total: ${calculateCartTotal(products)}{" "}
                    {`(${products.length} items)`}
                  </p>
                  <button
                    onClick={createCheckoutSession}
                    className="border w-[100%] px-2 py-2 hover:text-light-grey focus:text-light-grey"
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
              {/* End Mobile Checkout Block */}
              {products &&
                products.map((product, i) => (
                  <CartItem key={`cart_item-${i}`} {...product} />
                ))}
            </ul>
          </div>
        </div>
        {/* Desktop Checkout Block */}
        <div
          id="desktop_checkout"
          className="fixed right-[30px] top-[105px] text-white h-20 pt-10"
        >
          Total: ${calculateCartTotal(products)} {`(${products.length} items)`}
          <button
            onClick={() => {
              setLoading(!loading);
              createCheckoutSession();
            }}
            className="border w-[100%] px-2 py-2 hover:text-light-grey focus:text-light-grey"
          >
            CHECKOUT
          </button>
        </div>
      </div>
      {/* End Desktop Checkout Block */}
      <Footer toggleTheme={toggleTheme} />
    </div>
  ) : (
    <div>
      <Header />
      <div className="w-screen flex justify-center">
        <EmptyResults />
      </div>
      <Footer toggleTheme={toggleTheme} />
    </div>
  );
}
