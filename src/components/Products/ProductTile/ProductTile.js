import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { UserAuth } from "../../../context/AuthContext";
import Button from "../../Button/Button";
import Loading from "../../Loading/Loading";
import Stock from "../StockIndicator/Stock";

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
  const [loading, setLoading] = useState(false);
  const { user } = UserAuth();
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-[200px] flex flex-col justify-between"
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
      <Button
        id={id}
        quantity={quantity}
        name={name}
        description={description}
        imgUrl={imgUrl}
        price={price}
        setLoading={setLoading}
      />
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
