import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";
import { useEffect, useState } from "react";
import { db} from "../firebase.config";
import nookies from "nookies";
import { app } from "../pages/api/webhook";
import { useRouter } from "next/router";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import OrderItem from "../components/OrderItem/OrderItem";

export async function getServerSideProps(ctx) {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  try {
    const cookies = nookies.get(ctx);
    const token = await app.auth().verifyIdToken(cookies.token);

    // the user is authenticated!
    const { uid, email } = token;
    // FETCH STUFF HERE!! 🚀
    // Firebase DB

    return {
      props: {
        products,
        token,
        message: `Your email is ${email} and your UID is ${uid}.`,
      },
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();

    // `as never` prevents inference issues
    // with InferGetServerSidePropsType.
    // The props returned here don't matter because we've
    // already redirected the user.
  }
  return {
    props: {
      products,
    },
  };
}

export default function Profile({ products, message, token }) {
  const [active, setActive] = useState("");
  const [orders, setOrders] = useState([]);
  const { user } = UserAuth();
  console.log(products);
  const router = useRouter();
  useEffect(() => {
    if (!orders.length) {
      getUserOrders();
    }
  }, [orders]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  const getUserOrders = async () => {
    try {
      const ordersQuery = query(
        collection(db, `users/${user.email}/orders`),
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
  };

  return (
    <>
      <Header {...products} />
      <div className="min-h-screen max-w-[1100px] m0a">
        <nav className="sticky top-[40px] lgl:top-[120px]">
          <ul className="flex gap-[20px] items-center justify-center text-xl py-4 px-4 bg-grey overflow-x-scroll scrollbar-hide">
            <li
              className={`text-white text-center min-w-[150px] border-b-4 ${
                active === "" ? "border-blue" : "border-[transparent]"
              }`}
              onClick={() => setActive("")}
            >
              MY ACCOUNT
            </li>
            <li
              className={`text-white text-center border-b-4 ${
                active === "profile" ? "border-blue" : "border-[transparent]"
              }`}
              onClick={() => setActive("profile")}
            >
              PROFILE
            </li>
            <li
              className={`text-white text-center min-w-[150px] border-b-4 ${
                active === "history" ? "border-blue" : "border-[transparent]"
              }`}
              onClick={() => setActive("history")}
            >
              ORDER HISTORY
            </li>
          </ul>
        </nav>
        {active === "" ? (
          <section className="text-white text-5xl py-4 px-4">
            {`Hello, ${user.displayName?.split(" ")[0] || user.email}`}
            <h2 className="text-xl tracking-wider pt-6">Your latest order</h2>
            <div>
              {[orders[0]].map((order, i) => (
                <OrderItem {...order} key={`order_item-${i}`} />
              ))}
            </div>
          </section>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
