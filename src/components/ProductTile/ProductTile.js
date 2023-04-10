import { addToCart } from "@/redux/reducers/cartSlice";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Loading from '../Loading/Loading';
const ProductTile = ({ id, name, description, imgUrl, price, quantity }) => {
  const [loading, setLoading] = useState(false);

  const handleQuantity = (quantity) => {
    if (quantity >= 20) {
      return "In stock";
    } else if (quantity === 0) {
      return "Sold out!";
    } else if (quantity < 10) {
      return "< 10 left";
    }
  };

  const handleQuantityInBag = (products, currProductId) => {
    let count = 0;

    for (const product of products) {
      if (product.id === currProductId) count += product.quantity;
    }

    return count;
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const quantityInBag = handleQuantityInBag(products, id);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Loading open={loading} setOpen={setLoading} />
      <Image
        loading="lazy"
        src={imgUrl}
        width={1920}
        height={1080}
        alt={description}
        className="product-img"
      />
      <h3 className="text-light-grey text-xs pt-2">{description}</h3>
      <h2 className="product_name">{name}</h2>
      <div className="flex justify-between">
        <p className="text-light-grey">{"$" + price}</p>
        <p
          id={`${quantity === 0 ? "sold-out" : ""}`}
          className={`px-2 ${
            quantity >= 20 ? "bg-[green] text-white" : "text-grey bg-[#F7C00B]"
          }`}
        >
          {handleQuantity(quantity)}
        </p>
      </div>
      <button
        disabled={!quantity}
        onClick={() => {
          setLoading(true)
          dispatch(
            addToCart({
              id: id,
              name: name,
              description: description,
              imgUrl: imgUrl,
              price: price,
              quantity: 1,
            })
          ) && toast.success(`${name} is added to bag.`) && setTimeout(() => setLoading(false), 1000);
        }}
        className={`product_add ${
          quantity ? "text-white" : "disabled"
        } border text-xs w-[100%] py-2 tracking-wider mt-1 hover:text-light-grey focus:text-light-grey`}
      >
        {`ADD TO BAG ${quantityInBag > 0 ? `(${quantityInBag} INSIDE)` : ""}`}
      </button>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </motion.div>
  );
};

export default ProductTile;
