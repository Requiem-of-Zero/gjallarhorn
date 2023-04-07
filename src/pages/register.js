import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { TextField } from "@mui/material";

export default function Register() {
  const { createUser, user, logout } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      router.push("/");
    }
  }, []);

  return (
    <div className="w-screen flex justify-center h-[565px] pt-8">
      <div className="w-[300px]">
        <div className="flex flex-col text-white gap-[20px]">
          <h2 className="text-4xl">REGISTER</h2>
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
            focused
          />
          <button className="border py-2 text-light-grey font-bold">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}
