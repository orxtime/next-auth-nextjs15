"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { LogOut } from "lucide-react";

const UserInformation = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-center container mx-auto w-full h-screen px-[12px] ">
      <div className="max-w-md w-full mx-auto rounded-2xl p-8 py-12 md:py-12 space-y-4 shadow-input bg-white border border-slate-300">
        <div className="flex flex-col text-lg">
          Имя
          <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div className="flex flex-col text-lg">
          Email<span className="font-bold">{session?.user?.email}</span>
        </div>
        <div className="pt-6">
          <button
            onClick={() =>
              signOut({
                callbackUrl: "/", // Redirect to this page after logout
              })
            }
            className="py-3 w-full flex justify-center font-semibold border items-center gap-2 rounded-md text-lg cursor-pointer hover:bg-red-700 hover:text-white border-gray-800 hover:border-red-700 bg-transparent text-gray-800"
          >
            Выйти
            <LogOut strokeWidth={3} size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
