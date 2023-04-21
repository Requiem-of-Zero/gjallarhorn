import { UserAuth } from "../context/AuthContext";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";

export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
}

export default function Register({ products }) {
  const { createUser, user, signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user !== null) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="w-screen">
      <Header {...products} />
      <div >
        <div className="flex justify-center items-center h-[80vh]">
          <div className="flex flex-col text-white gap-[20px]">
            <h2 id="login_header" className="text-4xl cursor-default">
              REGISTER
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[20px] w-[300px]"
            >
              <TextField
                color="primary"
                label="Email"
                type="email"
                inputProps={{
                  style: {
                    padding: 10,
                    color: "white",
                  },
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                focused
              />
              <TextField
                color="primary"
                type="password"
                label="Password"
                inputProps={{
                  style: {
                    padding: 10,
                    color: "white",
                  },
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                focused
              />
              <button className="border py-2 text-light-grey font-bold">
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
