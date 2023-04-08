import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

export default function Login() {
  const { googleSignIn, user, signIn, logout } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      setError(e.message)
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
      console.log(error)
    }
  };

  useEffect(() => {
    if (user !== null) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="w-screen flex justify-center h-[75vh] sm:items-center">
      <div className="w-[300px]">
        <div className="flex flex-col text-white">
          <h2 className="text-4xl pb-4 pt-10">SIGN IN</h2>
          <button
            className="border-white border py-2"
            onClick={handleGoogleSignIn}
          >
            SIGN IN WITH GOOGLE
          </button>
          <div class="text-weak dark:text-weak-dark flex items-center py-4">
            <span class="bg-light-grey h-[2px] flex-1"></span>{" "}
            <span class="mx-3">or</span>{" "}
            <span class="bg-light-grey h-[2px] flex-1"></span>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-[20px]'>
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
              SIGN IN
            </button>
            <p className='text-[red] text-center'>{error ? 'Incorrect email or password.' : ''}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
