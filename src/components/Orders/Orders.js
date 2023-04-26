import moment from "moment";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase.config";
import OrderItem from "./OrderItem";
import Loading from "../Loading/Loading";

const Orders = ({ user, active }) => {
  const [orders, setOrders] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);

  const router = useRouter();
  console.log(orders);

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
      {active === "history" && (
        <div>
          {orders.map((order, i) => {
            return <OrderItem {...order} key={`order_item-${i}`} />;
          })}
        </div>
      )}
      {active === "" && <OrderItem {...orders[0]} />}
    </div>
  ) : (
    <Loading open={fetchLoading} setOpen={setFetchLoading} />
  );
};

export default Orders;
