"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center container mx-auto w-full h-screen px-[12px] "
      >
        <div className="max-w-md w-full mx-auto rounded-2xl p-8 py-12 md:py-12 space-y-8 shadow-input bg-white border border-[#1a1c24]">
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          <div className="font-bold text-neutral-800 dark:text-neutral-200 flex flex-col space-y-2">
            <Link href="/" className="flex items-start w-full justify-start">
              <h3 className="text-black font-bold text-[28px]">LOGIN</h3>
            </Link>
            <p className="font-normal text-[14px] text-neutral-800 ">
              Login next-auth
            </p>
          </div>

          <div className="flex flex-col space-y-6 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label
                htmlFor="email"
                className="text-sm font-medium text-black  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-3  mt-1 border rounded-lg border-gray-400 shadow-none focus:outline-none focus:ring-0 focus:ring-[#aeaeae] focus:border-gray-400 focus:bg-gray-50 sm:text-sm"
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label
                htmlFor="email"
                className="text-sm font-medium text-black  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Password
              </label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-3  mt-1 border rounded-lg border-gray-400 shadow-none focus:outline-none focus:ring-0 focus:ring-[#aeaeae] focus:border-gray-400 focus:bg-gray-50 sm:text-sm"
                placeholder="password"
              />
            </div>
          </div>
          <div className="w-full">
            <button className="flex justify-center font-semibold border items-center gap-2 rounded-md py-2 px-8 w-full text-[16px]  cursor-pointer bg-[#f55418] hover:bg-transparent border-[#f55418] text-white ring-[#f55418]/20 hover:text-[#f55418]">
              Login
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm font-medium text-neutral-800 ">
              create new Account{" "}
              <Link href={"/register"}>
                <span className="text-[#1565C0] ">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
