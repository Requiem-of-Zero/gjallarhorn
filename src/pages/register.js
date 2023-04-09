import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { UserAuth } from "@/context/AuthContext";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Register() {
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
      <Header />
      <div className="flex justify-center">
        <div className="w-[300px] h-[80vh]">
          <div className="mt-10 flex flex-col text-white gap-[20px]">
            <h2 className="text-4xl cursor-default">REGISTER</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
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
                  console.log(email);
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
                  console.log(password);
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
      <Footer />
    </div>
  );
}
