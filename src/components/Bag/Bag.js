import React from 'react'
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";

const Bag = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="relative">
      <LocalMallIcon className="cursor-pointer" />
      <span
        className={`cursor-pointer absolute text-xs -top-1 left-4 w-5 h-5 rounded-full flex justify-center items-center ${
          products && products.length > 0 ? "bg-blue" : ""
        }`}
      >
        {products.length > 0 ? products.length : ""}
      </span>
    </div>
  );
}

export default Bag