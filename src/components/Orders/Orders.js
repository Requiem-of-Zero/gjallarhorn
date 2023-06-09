import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../firebase.config";
import OrderItem from "./OrderItem";
import Loading from "../Loading/Loading";

const Orders = ({ user, active, productsHash }) => {
  const [orders, setOrders] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (orders.length) return;
    getUserOrders(user.email);
  }, [orders]);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  const getUserOrders = async (email) => {
    try {
      const ordersQuery = query(
        collection(db, `users/${email}/orders`),
        orderBy("timestamp", "desc")
      );
      const orderDocs = await getDocs(ordersQuery);
      const order = orderDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(order);
    } catch (error) {
      console.log("getUserOrder error", error);
    }
    setFetchLoading(false);
  };

  return !fetchLoading ? (
    <div className="text-sm">
      {active === "history" && orders && (
        <div>
          {orders.map((order, i) => {
            return (
              <OrderItem
                height={200}
                width={200}
                productsHash={productsHash}
                {...order}
                key={`order_item-${i}`}
              />
            );
          })}
        </div>
      )}
      {active === "" && orders && (
        <OrderItem
          height={200}
          width={200}
          productsHash={productsHash}
          {...orders[0]}
        />
      )}
    </div>
  ) : (
    <Loading open={fetchLoading} setOpen={setFetchLoading} />
  );
};

export default Orders;
