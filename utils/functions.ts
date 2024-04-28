import { RegisterDetails } from "./../types/types";
import { LoginDetails } from "@/types/types";
import { signIn } from "next-auth/react";

export function formatDate(date: Date): string {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Array of suffixes for days
  const suffixes = ["th", "st", "nd", "rd"];
  const suffix = suffixes[(day - 1) % 10] || suffixes[0];

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${day}${suffix} ${months[monthIndex]} ${year}`;
}

export function formatDayOfWeek(date: Date): string {
  // Array of abbreviated day names
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return daysOfWeek[date.getDay()];
}

export interface TimeInfo {
  timeString: string;
  period: string;
}

export function getTimeInfo(date: Date): TimeInfo {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
  let period = "";
  if (hours < 12) {
    period = "Morning";
  } else if (hours >= 12 && hours < 18) {
    period = "Afternoon";
  } else {
    period = "Evening";
  }
  return { timeString, period };
}

export const loginUser = async ({
  email,
  password,
}: LoginDetails): Promise<boolean> => {
  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      throw new Error("Invalid credentials");
    }

    return true;
  } catch (error) {
    return false;
  }
};

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterDetails): Promise<{ status: boolean; message: string }> => {
  try {
    const userExist = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/user-exists`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const { user } = await userExist.json();

    if (user) {
      throw new Error("User already exists");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );

    if (!res.ok) {
      throw new Error("An error occurred");
    }

    return { status: true, message: "User created successfully" };
  } catch (error) {
    return { status: false, message: (error as Error).message };
  }
};
