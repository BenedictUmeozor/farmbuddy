import AIPowered from "@/assets/icons/AIPowered";
import DashboardIcon from "@/assets/icons/DashboardIcon";
import WeatherIcon from "@/assets/icons/WeatherIcon";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { List, LogOut, TrendingUp } from "react-feather";

export default function SideBar() {
  return (
    <nav className="sidebar-content">
      <ul className="w-full mx-auto flex flex-col gap-6">
        <li className="w-full">
          <Link href="/dashboard" className="w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2">
            <DashboardIcon className="w-5" /> Dashboard
          </Link>
        </li>
        <li className="w-full">
          <Link href="/weather" className="w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2">
            <WeatherIcon className="w-5" /> Weather
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/product-listings"
            className="w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2"
          >
            <List className="w-5" /> Product Listings
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/market-insights"
            className="w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2"
          >
            <TrendingUp className="w-5" /> Market Insight
          </Link>
        </li>
        <li className="w-full">
          <Link href="/chat" className="w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2">
            <CpuChipIcon className="w-5" /> AI Chatbot
          </Link>
        </li>
        <li className="w-full">
          <Link href="/articles" className="w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2">
            <DocumentIcon className="w-5" /> Articles
          </Link>
        </li>
      </ul>
      <button className="flex items-center gap-2 hover:bg-[#A5D7A7] p-2">
        <LogOut className="w-5" /> Logout
      </button>
    </nav>
  );
}
