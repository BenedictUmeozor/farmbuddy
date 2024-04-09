"use client";

import Link from "next/link";
import google from "@/assets/google-g-2015.svg";
import apple from "@/assets/apple-14.svg";
import facebook from "@/assets/facebook-2020-2-1.svg";
import Image from "next/image";

export default function Form() {
  return (
    <div className="bg-white md:w-[60%] lg:w-[50%] max-w-lg p-6 rounded-md my-8">
      <h2 className="text-center font-semibold text-2xl mb-6">
        Welcome back, Login
      </h2>
      <form className="w-full">
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="h-14 border border-[#ddd] rounded w-full px-3 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-8">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="h-14 border border-[#ddd] rounded w-full px-3 focus:outline-none focus:border-primary"
          />
        </div>

        <button className="h-14 w-full bg-primary text-white text-center hover:border hover:border-primary hover:bg-white hover:text-primary rounded-3xl transition-all duration-200 ease-linear">
          Login
        </button>
      </form>
      <p className="text-center my-6">or login with</p>
      <div className="flex items-center justify-center gap-4">
        <button className="flex items-center justify-center">
          <Image
            src={google}
            alt="image"
            height={100}
            width={100}
            className="max-w-full w-12"
          />
        </button>
        <button className="flex items-center justify-center">
          <Image
            src={facebook}
            alt="image"
            height={100}
            width={100}
            className="max-w-full w-12"
          />
        </button>
        <button className="flex items-center justify-center">
          <Image
            src={apple}
            alt="image"
            height={100}
            width={100}
            className="max-w-full w-9"
          />
        </button>
      </div>
      <p className="mt-4 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
