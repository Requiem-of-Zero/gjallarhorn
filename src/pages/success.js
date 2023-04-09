import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "@/redux/reducers/cartSlice";
export default function Success() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetCart(products))
  }, [])
  
  return (
    <body className="h-[100vh] w-screen flex items-center">
      <main className="max-w-contentContainer text-white text-3xl">
        <h1 className="text-center pb-4">Success, your order has been placed!</h1>
        <p className="text-center">
          Thank you for shopping with us. We'll send a confirmation once your
          item(s) has shipped.
        </p>
      </main>
    </body>
  );
}
