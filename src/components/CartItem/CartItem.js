import React from "react";
import Image from "next/image";

const CartItem = ({ id, name, description, type, imgUrl, price, quantity }) => {
  return (
    <li className="flex gap-[15px]">
      <Image src={imgUrl} width={300} height={300} />
      <p className="font-medium text-base">{name.toUpperCase()}</p>
    </li>
  );
};

export default CartItem;
