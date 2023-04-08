import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem/CartItem";

export default function Cart() {
  const products = useSelector((state) => state.products);

  console.log(products);
  return (
    <div className='w-screen flex items-center justify-center'>
      <div className="py-5 text-white text-4xl font-bold max-w-contentContainer">
        YOUR BAG
        <ul className="flex flex-col gap-[20px]">
          {products.map((product) => (
            <CartItem {...product} />
          ))}
        </ul>
      </div>
    </div>
  );
}
