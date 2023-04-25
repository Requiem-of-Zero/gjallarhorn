import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";
import { useState } from "react";

export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");
  return {
    props: {
      products,
    },
  };
}

export default function Profile({ products }) {
  const { user } = UserAuth();
  const [active, setActive] = useState("");
  return (
    <>
      <Header {...products} />
      <div className="min-h-screen max-w-[1100px] m0a">
        <nav className="sticky top-[48px] lgl:top-[120px]">
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
            {`Hello, ${user.displayName.split(" ")[0]}`}
            <h2 className="text-xl tracking-wider pt-6">Your latest order</h2>
          </section>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
