"use client";

import Link from "next/link";
import google from "@/assets/google-g-2015.svg";
import apple from "@/assets/apple-14.svg";
import facebook from "@/assets/facebook-2020-2-1.svg";
import Image from "next/image";
import { useFormState } from "react-dom";
import { createUser } from "@/utils/actions";
import { SubmitButton } from "@/components/Submitbutton";
import { RegisterFormState } from "@/types/types";
import { useEffect } from "react";
import { loginUser } from "@/utils/functions";
import { useRouter } from "next/navigation";

const initialState: RegisterFormState = {
  message: "",
  success: "",
  details: { email: "", password: "" },
};

export default function Form() {
  const [state, formAction] = useFormState(createUser, initialState);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (state.success) {
        const login = await loginUser(state.details);
        if (login) {
          router.push("/dashboard");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className="bg-white md:w-[60%] lg:w-[50%] max-w-lg p-6 rounded-md my-8">
      <h2 className="text-center font-semibold text-2xl mb-6">
        Create your account
      </h2>
      {state.message && (
        <p className="text-[0.85rem] text-red-600 text-center">
          {state.message}
        </p>
      )}
      {state.success && (
        <p className="text-[0.85rem] text-green-600 text-center">
          {state.success}
        </p>
      )}
      <form className="w-full" action={formAction}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            className="h-14 border border-[#ddd] rounded w-full px-3 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="h-14 border border-[#ddd] rounded w-full px-3 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="h-14 border border-[#ddd] rounded w-full px-3 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            className="h-14 border border-[#ddd] rounded w-full px-3 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4 flex items-center gap-4">
          <input type="checkbox" name="terms" />{" "}
          <span>
            By registering, you are agreeing to our{" "}
            <Link href="#" className="text-primary">
              terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary">
              conditions
            </Link>
          </span>
        </div>
        <div className="mb-8 flex items-center gap-4">
          <input type="checkbox" name="receive_mails" />{" "}
          <span>I want to receive emails and newsletters from Farmbuddy</span>
        </div>
        <SubmitButton
          text="Continue"
          className="h-14 w-full bg-primary text-white text-center hover:border hover:border-primary hover:bg-white hover:text-primary rounded-3xl transition-all duration-200 ease-linear"
        />
      </form>
      <p className="text-center my-6">or continue with</p>
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
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
