"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ShieldCheck } from "lucide-react";

export function LoginScreen() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session, status, router]);

  return (
    <>
      <main className="flex h-screen w-screen items-center justify-center">
        {/* <LoginForm /> */}
        <form
          action={async () => {
            await signIn("keycloak");
          }}
          className="w-1/2 max-w-64"
        >
          <button
            type="submit"
            className="py-4 w-full flex justify-center font-bold border items-center gap-2 rounded-md shadow-lg text-xl cursor-pointer bg-red-700 text-white border-red-700 hover:bg-transparent hover:text-red-700"
          >
            <ShieldCheck strokeWidth={3} />
            Войти
          </button>
        </form>
      </main>
    </>
  );
}
