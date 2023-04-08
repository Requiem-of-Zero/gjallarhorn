import React from "react";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} from "@/redux/reducers/cartSlice";
import { toast, ToastContainer } from "react-toastify";

const CartItem = ({ id, name, description, type, imgUrl, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex gap-[15px]">
      <div className="flex gap-[10px]">
        <Image src={imgUrl} width={200} height={300} alt='product'/>
        <div>
          <p className="font-medium text-base text-light-grey">
            {name.toUpperCase()}
          </p>
          <p className="font-medium text-base text-light-grey">{description}</p>
        </div>
      </div>
      <div className="flex items-end gap-[5px] text-sm pl-5">
        <RemoveIcon
          className="cursor-pointer"
          size="large"
          onClick={() => dispatch(decrementQuantity(id))}
        />
        <p className="cursor-default">{quantity}</p>
        <AddIcon
          className="cursor-pointer"
          onClick={() => dispatch(incrementQuantity(id))}
        />
      </div>
      <div className="flex gap-[30px]">
        <p>${price * quantity}</p>
        <ClearIcon
          className="cursor-pointer"
          onClick={() => {
            dispatch(removeFromCart(id)) && toast.error(`${name} is removed.`);
          }}
        />
      </div>
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
    </li>
  );
};

export default CartItem;
