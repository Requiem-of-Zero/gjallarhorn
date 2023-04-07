import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const { googleSignIn, user, logout } = UserAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(user !== null){
      router.push('/')
    }
  }, [])

  return (
    <div className="w-screen flex items-center justify-center h-[565px]">
      <div className="w-[300px]">
        <div className="flex flex-col text-white">
          <h2 className="text-4xl">SIGN IN</h2>
          <button
            className="border-white border py-2"
            onClick={handleGoogleSignIn}
          >
            SIGN IN WITH GOOGLE
          </button>
          <div class="text-weak dark:text-weak-dark flex items-center">
            <span class="bg-light-grey h-[2px] flex-1"></span>{" "}
            <span class="mx-3">or</span>{" "}
            <span class="bg-light-grey h-[2px] flex-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
