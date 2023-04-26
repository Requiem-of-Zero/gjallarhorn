import moment from "moment";
import getEntryById from "../../contentful/client";
import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

const OrderItem = ({
  amount,
  amount_shipping,
  id,
  items_id_quantity,
  status,
  timestamp,
  products,
  setFetchLoading,
  fetchLoading
}) => {
  const [items, setItems] = useState([]);
  console.log(products);

  const handleItems = () => {}
  return (
    <div>
      <div className="text-sm">
        <p>{id}</p>
        <p>${amount}</p>
        <p>${amount_shipping}</p>
        <p>{status === 'order.created' ? 'Order Created' : ''}</p>
        <p>{items_id_quantity}</p>
        <p>
          {moment(new Date(timestamp?.seconds * 1000)).format(
            "dddd, MMMM Do YYYY"
          )}
        </p>
      </div>
    </div>
  );
};

export default OrderItem;
