import React from "react";
import moment from "moment";

const OrderItem = ({
  id,
  amount,
  amount_shipping,
  status,
  items_id_quantity,
  timestamp,
}) => {
  return (
    <div>
      <p>{id}</p>
      <p>${amount}</p>
      <p>${amount_shipping}</p>
      <p>{status === "order.created" ? "Order Created" : ""}</p>
      <p>{items_id_quantity}</p>
      <p>
        {moment(new Date(timestamp?.seconds * 1000)).format(
          "dddd, MMMM Do YYYY"
        )}
      </p>
    </div>
  );
};

export default OrderItem;
