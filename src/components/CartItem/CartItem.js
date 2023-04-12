import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/reducers/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = ({ id, name, description, type, imgUrl, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex gap-[15px] justify-between w-[100%]">
      <div className="flex gap-[10px]">
        <Image src={`https:${imgUrl}`} alt="product" height={100} width={100} />
        <div className="flex flex-col justify-center h-[100%]">
          <p className="font-medium text-xs text-light-grey w-[50px] sml:w-[100px] sml:text-sm">
            {name.toUpperCase()}
          </p>
        </div>
      </div>
      <div className="flex items-end gap-[5px] text-sm w-[100px]">
        <RemoveIcon
          className="cursor-pointer"
          size="large"
          onClick={() => dispatch(decrementQuantity(id))}
        />
        <p id="cart_quantity" className="cursor-default">
          {quantity}
        </p>
        <AddIcon
          className="cursor-pointer"
          onClick={() => dispatch(incrementQuantity(id))}
        />
      </div>
      <div className="flex gap-[30px]">
        <p id="cart_price" className="w-[50px]">
          ${(price * quantity).toFixed(2)}
        </p>
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
