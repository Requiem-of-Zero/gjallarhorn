import React from "react";
import moment from "moment";
import getEntryById from "../../contentful/client";
import Image from "next/image";
import Link from "next/link";

const OrderItem = ({
  id,
  amount,
  amount_shipping,
  status,
  items_id_quantity,
  timestamp,
  productsHash,
}) => {
  const handleItemIds = () => {
    const items = [];
    for (const item of items_id_quantity) {
      let [itemId, quantity] = item.split(",");
      items.push(
        `${productsHash[itemId].fields.image.fields.file.url},${quantity}`
      );
    }

    return items;
  };

  const items = items_id_quantity && handleItemIds(items_id_quantity);
  console.log(items, "items");
  return (
    <div>
      <p>{id}</p>
      <p>${amount}</p>
      <p>${amount_shipping}</p>
      <p>{status === "order.created" ? "Order Created" : ""}</p>
      <div className="flex">
        {items &&
          items.map((item, i) => {
            const [imgUrl, quantity] = item.split(",");
            return (
              <Link
                href={`/show/${items_id_quantity[i].split(",")[0]}`}
                key={`order_item-${i}`}
              >
                <Image src={`https:${imgUrl}`} width={100} height={100} />
              </Link>
            );
          })}
      </div>
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
