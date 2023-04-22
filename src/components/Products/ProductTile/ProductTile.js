import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Button from "../../Button/Button";
import Loading from "../../Loading/Loading";
import Stock from "../StockIndicator/Stock";
import Skeleton from "@mui/material/Skeleton";

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
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-[170px] min-w-[170px] flex flex-col justify-between m0a"
    >
      <Loading open={loading} setOpen={setLoading} />
      <Link href={`/show/${id}`}>
        <div style={{ position: "relative", height: height, width: width }}>
          {imgUrl ? (
            <Image
              loading="lazy"
              src={`https:${imgUrl}`}
              fill
              style={{ objectFit: "fill" }}
              alt={description}
              className="product-img"
            />
          ) : (
            <Skeleton variant="rectangular" width={170} height={200} />
          )}
        </div>
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
