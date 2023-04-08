import { addToCart } from "@/redux/reducers/cartSlice";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
import { useDispatch } from "react-redux";

const ProductTile = ({
  id,
  name,
  description,
  imgUrl,
  price,
  quantity,
}) => {
  const handleQuantity = (quantity) => {
    if (quantity > 20) {
      return "In stock";
    } else if (quantity < 10) {
      return "< 10 left";
    } else {
      return "Sold out!";
    }
  };
  const dispatch = useDispatch();
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        loading="lazy"
        src={imgUrl}
        width={1920}
        height={1080}
        alt={description}
        className="product-img"
      />
      <h3 className="text-light-grey">{description}</h3>
      <h2 className="text-white">{name}</h2>
      <div className="flex justify-between">
        <p className="text-light-grey">{"$" + price}</p>
        <p
          className={`px-2 ${
            quantity > 20 ? "bg-[green] text-white" : "text-grey bg-[#F7C00B]"
          }`}
        >
          {handleQuantity(quantity)}
        </p>
      </div>
      <button
        onClick={() => dispatch(addToCart({
          id: id,
          name: name,
          description: description,
          imgUrl: imgUrl,
          price: price,
          quantity: 1
        })) && toast.success(`${name} is added to bag.`)}
        className="text-white border w-[100%] py-2 tracking-wider mt-1"
      >
        ADD TO BAG
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
