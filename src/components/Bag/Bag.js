import React, { useEffect, useState } from 'react'
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";

const Bag = () => {
  const products = useSelector((state) => state.products);

  const handleQuantity = () => {
    let total = 0;

    for(const product of products){
      total += product.quantity
    }

    return total
  }
  
  return (
    <div className="relative hover:opacity-[0.5]">
      <LocalMallIcon className="cursor-pointer" />
      <span
        className={`cursor-pointer absolute text-xs -top-1 left-4 w-5 h-5 rounded-full flex justify-center items-center ${
          products && products.length > 0 ? "bg-blue" : ""
        }`}
      >
        {products.length > 0 ? handleQuantity(products) : ""}
      </span>
    </div>
  );
}

export default Bag