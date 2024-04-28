"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "react-feather";

export default function SignOutButton() {
  return (
    <button
      className="flex items-center gap-2 hover:bg-[#A5D7A7] p-2"
      onClick={async () => signOut()}
    >
      <LogOut className="w-5" /> Logout
    </button>
  );
}
