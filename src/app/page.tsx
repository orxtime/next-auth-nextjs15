"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
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
        <Link
          href="/dashboard"
          className="py-3 px-4 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-lg"
        >
          Dashboard
        </Link>
      </main>
    </>
  );
}
