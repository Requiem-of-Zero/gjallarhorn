import moment from "moment";
import getEntryById from "../../contentful/client";
import { Timestamp } from "firebase/firestore";

const OrderItem = ({
  amount,
  amount_shipping,
  id,
  items_id_quantity,
  status,
  timestamp,
  products,
}) => {
  console.log(timestamp);
  return (
    <div>
      <div className="text-sm">
        <p>{id}</p>
        <p>${amount}</p>
        <p>${amount_shipping}</p>
        <p>{status}</p>
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
