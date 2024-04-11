import UserIcon from "@/assets/icons/UserIcon";
import { Bell } from "react-feather";

export default function HeaderTwo() {
  return (
    <header className="flex items-center justify-end">
      <div className="flex items-center gap-1">
        <Bell className="w-10 cursor-pointer" />
        <UserIcon className="w-24 cursor-pointer" />
      </div>
    </header>
  );
}
