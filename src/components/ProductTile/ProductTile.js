import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { UserAuth } from "../../context/AuthContext";
import { addToCart } from "../../redux/reducers/cartSlice";
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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const { user } = UserAuth();
  const [indicator, setIndicator] = useState("green");

  const handleQuantity = (quantity) => {
    if (quantity >= 20) {
      return "In stock";
    } else if (quantity <= 0) {
      return "Sold out!";
    } else if (quantity < 10) {
      return "< 10 left";
    } else if (quantity >= 10) {
      return "> 10 left";
    }
  };

  const handleIndicator = (indicator) => {
    if (indicator === "green") {
      return "bg-[green] text-white";
    } else if (indicator === "red") {
      return "bg-[red] text-white";
    } else {
      return "bg-[#F7C00B] text-grey";
    }
  };

  const handleColor = (quantity) => {
    if (quantity >= 20) {
      return setIndicator("green");
    } else if (quantity <= 0) {
      return setIndicator("red");
    } else if (quantity < 10) {
      return setIndicator("yellow");
    } else if (quantity >= 10) {
      return setIndicator("yellow");
    }
  };

  const [stock, setStock] = useState(handleQuantity(quantity));

  useEffect(() => {
    setStock(handleQuantity(quantity));
  }, []);

  useEffect(() => {
    handleColor(quantity);
  }, []);

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
        {/* Add Stock Indicator Component */}
        <p className={`px-2 ${handleIndicator(indicator)}`}>{stock}</p>
      </div>
      <button
        disabled={quantity <= 0 || !user}
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
            );
          }
        }}
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
