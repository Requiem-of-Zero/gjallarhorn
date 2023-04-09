import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { UserAuth } from "@/context/AuthContext";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const { googleSignIn, user, signIn, logout, sendPasswordReset } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="w-screen sm:items-center">
      <Header />
      <div>
        <div className="w-max-contentContainer h-[80vh] flex justify-center">
          <div className="flex flex-col text-white">
            <h2 className="text-4xl pb-4 pt-10">SIGN IN</h2>
            <button
              className="border-white border py-2"
              onClick={handleGoogleSignIn}
            >
              SIGN IN WITH GOOGLE
            </button>
            <div className="text-weak dark:text-weak-dark flex items-center py-4">
              <span className="bg-light-grey h-[2px] flex-1"></span>{" "}
              <span className="mx-3">or</span>{" "}
              <span className="bg-light-grey h-[2px] flex-1"></span>
            </div>
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
              <p className="text-light-grey underline">Forgot password</p>
              <button className="border py-2 text-light-grey font-bold">
                SIGN IN
              </button>
              <p className="text-[red] text-center">
                {error ? "Incorrect email or password." : ""}
              </p>
            </form>
            <p className="text-light-grey">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
