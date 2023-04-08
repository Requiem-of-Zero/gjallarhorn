import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem/CartItem";

export default function Cart() {
  const products = useSelector((state) => state.products);
  
  const calculateCartTotal = (products) => {
    let sum = 0;

    for(const product of products){
      sum += product.price * product.quantity
    }

    return sum.toFixed(2)
  }

  return (
    <div className="w-screen flex justify-center h-[100vh]">
      <div className="py-5 text-white font-bold max-w-contentContainer">
        <h2 className="pb-1 text-4xl cursor-default">YOUR BAG</h2>
        <ul className="flex flex-col gap-[20px]">
          {products.map((product, i) => (
            <CartItem key={`cart_item-${i}`}{...product} />
          ))}
        </ul>
      </div>
      <div className="sticky top-[105px] text-white h-20 w-[300px] pt-10">
        Total: ${calculateCartTotal(products)} {`(${products.length} items)`}
        <button className="border w-[100%] px-2 py-2">CHECKOUT</button>
      </div>
    </div>
  );
}
