"use client";

import Link from "next/link";
import google from "@/assets/google-g-2015.svg";
import apple from "@/assets/apple-14.svg";
import facebook from "@/assets/facebook-2020-2-1.svg";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { loginUser } from "@/utils/functions";
import { useRouter } from "next/navigation";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);

      if (!email || !password) {
        setError("Please fill all fields");
        return;
      }

      const login = await loginUser({ email, password });

      if (!login) {
        setError("Invalid email or password");
        return;
      }
    } catch (error) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full md:w-[60%] lg:w-[50%] mdmax-w-lg p-6 rounded-md my-8">
      <h2 className="text-center font-semibold text-2xl mb-6">
        Welcome back, Login
      </h2>
      {error && (
        <p className="text-[0.85rem] text-red-600 text-center">{error}</p>
      )}
      <form className="w-full" onSubmit={submitForm}>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 border border-[#ddd] rounded w-full px-3 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-8">
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 border border-[#ddd] rounded w-full px-3 focus:outline-none focus:border-primary"
          />
        </div>

        <button
          disabled={loading}
          className="h-14 w-full bg-primary text-white text-center hover:border hover:border-primary hover:bg-white hover:text-primary rounded-3xl transition-all duration-200 ease-linear"
        >
          {loading ? "Loading..." : "Login"}
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
