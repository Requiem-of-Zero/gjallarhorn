import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem/CartItem";
import EmptyResults from "@/components/404/EmptyResults";
export default function Cart() {
  const products = useSelector((state) => state.products);

  const calculateCartTotal = (products) => {
    let sum = 0;

    for (const product of products) {
      sum += product.price * product.quantity;
    }

    return sum.toFixed(2);
  };

  return (
    products.length ? (

    <div className="w-screen flex justify-center h-[100vh]">
      <div className="py-5 text-white font-bold max-w-contentContainer">
        {/* Desktop Cart Page Header */}
        <h2 id="desktop_checkout" className="pb-1 text-4xl cursor-default">
          YOUR BAG
        </h2>
        {/* End Desktop Cart Header */}
        <ul className="flex flex-col gap-[20px]">
          {/* Mobile Checkout Block */}
          <div id="mobile_checkout" className="sticky top-[48px]">
            <h2 className="text-center pb-1 text-4xl cursor-default">
              YOUR BAG
            </h2>
            <div>
              <p className="text-center">
                Total: ${calculateCartTotal(products)}{" "}
                {`(${products.length} items)`}
              </p>
              <button className="border w-[100%] px-2 py-2 hover:text-light-grey focus:text-light-grey">
                CHECKOUT
              </button>
            </div>
          </div>
          {/* End Mobile Checkout Block */}
          {products.map((product, i) => (
            <CartItem key={`cart_item-${i}`} {...product} />
          ))}
        </ul>
      </div>
      {/* Desktop Checkout Block */}
      <div
        id="desktop_checkout"
        className="sticky top-[105px] text-white h-20 w-[200px] pt-10"
      >
        Total: ${calculateCartTotal(products)} {`(${products.length} items)`}
        <button className="border w-[100%] px-2 py-2 hover:text-light-grey focus:text-light-grey">
          CHECKOUT
        </button>
      </div>
      {/* End Desktop Checkout Block */}
    </div>
    ): (
      <div className="w-screen flex justify-center">
        <EmptyResults />
      </div>
    )
  );
}
