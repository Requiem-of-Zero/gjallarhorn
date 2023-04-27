import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";
import { useState } from "react";
import Orders from "../components/Orders/Orders";

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
  const handleOrders = (products) => {
    const productsHash = {};
    
    for(const product of products.products){
      productsHash[product.sys.id] = product;
    }
    
    return productsHash
  }
  
  const productsHash = handleOrders(products)
  
  const { user } = UserAuth();
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
      </div>
    </>
  );
}
