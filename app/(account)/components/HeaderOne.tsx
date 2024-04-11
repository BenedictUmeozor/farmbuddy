import UserIcon from "@/assets/icons/UserIcon";
import { Bell } from "react-feather";

export default function HeaderOne() {
  return (
    <header className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">Welcome Briana</h2>
      <div className="flex items-center gap-1">
        <Bell className="w-10 cursor-pointer" />
        <UserIcon className="w-24 cursor-pointer" />
      </div>
    </header>
  );
}
