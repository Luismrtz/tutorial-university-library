// components/auth/AuthHeader.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function useIsSignIn() {
  const pathname = usePathname() || "";
  return pathname.endsWith("/sign-in");
}

export function AuthFormHeader() {
  const isSignIn = useIsSignIn();

  return (
    <>
      <h1 className="text-2xl font-semibold text-white">
        {isSignIn ? "Welcome Back to BookWise" : "Create your library account"}
      </h1>
      <p className="text-light-100">
        {isSignIn
          ? "Access the vast collection of resources and stay updated"
          : "Please complete all fields  and upload a valid university ID to gain access to the libraryand update"}
      </p>
    </>
  );
}

export function AuthFormLink() {
  const isSignIn = useIsSignIn();
  return (
    <p className="text-center text-base font-medium">
      {isSignIn ? "New to BookWise? " : "Already have an account? "}

      <Link
        href={isSignIn ? "/sign-up" : "/sign-in"}
        className="font-bold text-primary"
      >
        {isSignIn ? "Create an account" : "Sign in"}
      </Link>
    </p>
  );
}
