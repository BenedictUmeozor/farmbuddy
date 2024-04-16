import UserIcon from "@/assets/icons/UserIcon";
import Link from "next/link";
import { Bell } from "react-feather";

export default function HeaderThree() {
  return (
    <header className="flex items-center gap-6 justify-end">
      <Link href="/product-lisings/my-listings" className="bg-primary text-white px-6 py-2 rounded-md border border-primary hover:bg-transparent hover:text-primary">View my listings</Link>
      <div className="flex items-center gap-1">
        <Bell className="w-10 cursor-pointer" />
        <UserIcon className="w-24 cursor-pointer" />
      </div>
    </header>
  );
}
