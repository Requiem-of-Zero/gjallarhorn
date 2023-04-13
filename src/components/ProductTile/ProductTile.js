import { addToCart } from "../../redux/reducers/cartSlice";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { UserAuth } from "../../context/AuthContext";
import Loading from "../Loading/Loading";

const ProductTile = ({
  id,
  name,
  description,
  imgUrl,
  price,
  quantity,
  height,
  width,
}) => {
  const [loading, setLoading] = useState(false);
  const { user } = UserAuth();

  const handleQuantity = (quantity) => {
    if (quantity >= 20) {
      return "In stock";
    } else if (quantity === 0) {
      return "Sold out!";
    } else if (quantity < 10) {
      return "< 10 left";
    } else if (quantity >= 10) {
      return '> 10 left'
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
      className="max-w-[200px]"
    >
      <Loading open={loading} setOpen={setLoading} />
      <Image
        loading="lazy"
        src={`https:${imgUrl}`}
        width={width}
        height={height}
        alt={description}
        className="product-img"
      />
      <h3 className="text-light-grey text-xs pt-2">{description}</h3>
      <h2 className="product_name h-[50px]">{name}</h2>
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
        disabled={!quantity || !user}
        onClick={() => {
          if (quantity > handleQuantityInBag(products, id)) {
            setLoading(true);
            dispatch(
              addToCart({
                id: id,
                name: name,
                description: description,
                imgUrl: imgUrl,
                price: price,
                quantity: 1,
              })
            ) &&
              toast.success(`${name} is added to bag.`) &&
              setTimeout(() => setLoading(false), 500);
          } else {
            toast.error(
              `${name} does not have enough inventory at the stock at the moment`
            )
          }
        }}
        className={`product_add ${
          quantity ? "text-white" : "disabled"
        } border text-xs w-[100%] py-2 tracking-wider mt-1 shadow-btnShadow hover:text-light-grey focus:text-light-grey`}
      >
        {`${user ? "ADD TO BAG" : "Sign In to Start Shopping"} ${
          quantityInBag > 0 ? `(${quantityInBag} INSIDE)` : ""
        }`}
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
