import Image from "next/image";
import { motion } from "framer-motion";

const ProductTile = ({ name, description, imgUrl, price, quantity }) => {
  const handleQuantity = (quantity) => {
    if (quantity > 20) {
      return "In stock";
    } else if (quantity < 10) {
      return "< 10 left";
    } else {
      return "Sold out!";
    }
  };
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
      <button className="text-white border w-[100%] py-2 tracking-wider mt-1">
        ADD TO BAG
      </button>
    </motion.div>
  );
};

export default ProductTile;
