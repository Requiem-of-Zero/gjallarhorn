import React, { useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@mui/material";

const OrderItem = ({
  id,
  amount,
  amount_shipping,
  status,
  items_id_quantity,
  timestamp,
  productsHash,
  width,
  height,
}) => {
  const [items, setItems] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);

  console.log(items);
  useEffect(() => {
    if (items.length) {
      setFetchLoading(false);
      return;
    }
    if (items_id_quantity) {
      handleItemIds();
    }
  }, [items]);

  const handleItemIds = () => {
    const items = [];
    for (const item of items_id_quantity) {
      let [itemId, quantity] = item.split(",");
      items.push(
        `${productsHash[itemId].fields.image.fields.file.url},${quantity},${productsHash[itemId].fields.name}`
      );
    }

    setItems(items);
    setFetchLoading(false);
  };

  return (
    <div>
      <p className="break-all pt-4 font-semibold">Order # : {id}</p>
      <div id="order_status" className="flex justify-between">
        <p>{status === "order.created" ? "Order Created" : ""}</p>
        <p className="font-semibold text-xs md:text-sm">
          {moment(new Date(timestamp?.seconds * 1000)).format(
            "MMMM Do YYYY, h:mm:ss a"
          )}
        </p>
      </div>
      <div className="flex gap-[20px] overflow-x-scroll">
        {!fetchLoading ? (
          items.map((item, i) => {
            const [imgUrl, quantity, name] = item.split(",");
            return (
              <Link
                href={`/show/${items_id_quantity[i].split(",")[0]}`}
                key={`order_item-${i}`}
              >
                <div
                  style={{ position: "relative", height: height, width: width }}
                >
                  {imgUrl ? (
                    <Image
                      loading="lazy"
                      src={`https:${imgUrl}`}
                      fill
                      style={{ objectFit: "fill" }}
                      alt={"user seafood order"}
                      className="product-img"
                    />
                  ) : (
                    <Skeleton variant="rectangular" width={170} height={200} />
                  )}
                </div>
                <p>
                  {name} x {quantity}
                </p>
              </Link>
            );
          })
        ) : (
          <>Loading</>
        )}
      </div>
      <div id="order_cost" className="flex justify-between pt-2">
        <p>Shipping Paid: ${(amount_shipping).toFixed(2)}</p>
        <p className="font-semibold">Total Paid: ${(amount + amount_shipping).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderItem;
