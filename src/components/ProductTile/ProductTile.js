import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { UserAuth } from "../../context/AuthContext";
import { addToCart } from "../../redux/reducers/cartSlice";
import Loading from "../Loading/Loading";
import Stock from "../StockIndicator/Stock";
import Link from "next/link";

const ProductTile = ({
  id,
  name,
  description,
  imgUrl,
  price,
  quantity,
  height,
  width,
  quantityTag,
  quantityColor,
}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const { user } = UserAuth();

  const handleClick = () => {
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
      );
    }
  };

  const handleQuantityInBag = (products, currProductId) => {
    let count = 0;

    for (const product of products) {
      if (product.id === currProductId) count += product.quantity;
    }

    return count;
  };

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
      <Link href={`/show/${id}`}>
        <Image
          loading="lazy"
          src={`https:${imgUrl}`}
          width={width}
          height={height}
          alt={description}
          className="product-img"
        />
      </Link>
      <h3 className="text-light-grey text-xs pt-2">{description}</h3>
      <h2 className="product_name h-[50px]">{name}</h2>
      <div className="flex justify-between">
        <p className="text-light-grey">{"$" + price}</p>
        {/* Add Stock Indicator Component */}
        <Stock quantityTag={quantityTag} quantityColor={quantityColor} />
      </div>
      <button
        disabled={quantity <= 0 || !user}
        onClick={handleClick}
        className={`product_add ${
          quantity <= 0 ? "disabled" : "text-white"
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
