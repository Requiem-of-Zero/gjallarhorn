import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";
import { useState } from "react";
import Orders from "../components/Orders/Orders";
import moment from "moment";
import Image from "next/image";
import { Skeleton } from "@mui/material";

export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
}

export default function Profile({ products }) {
  const [active, setActive] = useState("");
  const { user } = UserAuth();

  const handleOrders = (products) => {
    const productsHash = {};

    for (const product of products.products) {
      productsHash[product.sys.id] = product;
    }

    return productsHash;
  };

  const productsHash = handleOrders(products);
  console.log(user);
  return (
    <>
      <Header {...products} />
      <div className="min-h-screen max-w-[1100px] m0a">
        <nav className="sticky top-[47px] lgl:top-[120px] max-w-[1100px] z-20">
          <ul className="flex gap-[20px] items-center justify-start text-xl pt-2 px-4 bg-grey overflow-x-scroll scrollbar-hide">
            <li
              className={`text-white cursor-pointer whitespace-nowrap border-b-4 ${
                active === "" ? "border-blue pb-2" : "border-[transparent] pb-2"
              }`}
              onClick={() => setActive("")}
            >
              MY ACCOUNT
            </li>
            <li
              className={`text-white cursor-pointer whitespace-nowrap border-b-4 ${
                active === "profile"
                  ? "border-blue pb-2"
                  : "border-[transparent] pb-2"
              }`}
              onClick={() => setActive("profile")}
            >
              PROFILE
            </li>
            <li
              className={`text-white cursor-pointer whitespace-nowrap border-b-4 ${
                active === "history"
                  ? "border-blue pb-2"
                  : "border-[transparent] pb-2"
              }`}
              onClick={() => setActive("history")}
            >
              ORDER HISTORY
            </li>
          </ul>
        </nav>
        {active === "" && (
          <section className="text-white text-5xl py-4 px-4">
            {`Hello, ${user.displayName?.split(" ")[0] || user.email}`}
            <h2 className="text-xl tracking-wider pt-6">Your latest order</h2>
            <div>
              <Orders
                user={user}
                active={active}
                products={products.products}
                productsHash={productsHash}
              />
            </div>
          </section>
        )}
        {active === "history" && (
          <section className="text-white text-5xl py-4 px-4">
            {`Hello, ${user.displayName?.split(" ")[0] || user.email}`}
            <h2 className="text-xl tracking-wider pt-6">Your orders</h2>
            <div>
              <Orders
                user={user}
                active={active}
                products={products.products}
                productsHash={productsHash}
              />
            </div>
          </section>
        )}
        {active === "profile" && (
          <section className="text-white text-5xl py-4 px-4">
            {`Hello, ${user.displayName?.split(" ")[0] || user.email}`}
            <h2 className="text-xl tracking-wider pt-6 pb-2">Your profile</h2>
            <div style={{ position: "relative", height: 100, width: 100 }}>
              {user.photoURL ? (
                <Image
                  loading="lazy"
                  src={`${user.photoURL}`}
                  fill
                  style={{ objectFit: "fill" }}
                  alt={"user seafood order"}
                  className="product-img rounded-full"
                />
              ) : (
                <Skeleton variant="rectangular" width={170} height={200} />
              )}
            </div>
            <div className="text-base">
              <div className="flex pt-2">
                <label for="display_name" className="pr-2 font-semibold">
                  Display Name:{" "}
                </label>
                <p id="display_name"> {user.displayName}</p>
              </div>
              <div className="flex">
                <label for="user_email" className="pr-2 font-semibold">
                  Email:{" "}
                </label>
                <p id="user_email"> {user.email}</p>
              </div>
              <div className="flex">
                <label for="user_creation_date" className="pr-2 font-semibold">
                  User Created On:{" "}
                </label>
                <p id="user_creation_date">
                  {" "}
                  {moment(+user.metadata.createdAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
