"use server";

import { RegisterFormState } from "@/types/types";
import { registerUser } from "./functions";

export async function createUser(
  prevState: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirm_password = formData.get("confirm_password") as string;
  const terms = formData.get("terms");
  const receive_mails = formData.get("receive_mails");

  if (!name || !email || !password || !confirm_password) {
    return {
      message: "Please fill all fields",
      success: "",
      details: { email, password },
    };
  }

  if (!terms) {
    return {
      message: "Please accept the terms and conditions",
      success: "",
      details: { email, password },
    };
  }

  if (password !== confirm_password) {
    return {
      message: "Passwords do not match",
      success: "",
      details: { email, password },
    };
  }

  const { status, message } = await registerUser({ name, email, password });

  if (!status) {
    return {
      message,
      success: "",
      details: { email, password },
    };
  }

  return {
    message: "",
    success: "Logging you in",
    details: { email, password },
  };
}