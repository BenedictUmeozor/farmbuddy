"use client";

import DashboardIcon from "@/assets/icons/DashboardIcon";
import WeatherIcon from "@/assets/icons/WeatherIcon";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, Settings, TrendingUp } from "react-feather";
import SignOutButton from "./SignOutButton";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <nav className="sidebar-content">
      <ul className="w-full mx-auto flex flex-col gap-6">
        <li className="w-full">
          <Link
            href="/dashboard"
            className={
              "w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2 " +
              (pathname === "/dashboard" ? "bg-[#A5D7A7]" : "")
            }
          >
            <DashboardIcon className="w-5" /> Dashboard
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/weather"
            className={
              "w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2 " +
              (pathname === "/weather" ? "bg-[#A5D7A7]" : "")
            }
          >
            <WeatherIcon className="w-5" /> Weather
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/product-listings"
            className={
              "w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2 " +
              (pathname === "/product-listings" ? "bg-[#A5D7A7]" : "")
            }
          >
            <List className="w-5" /> Product Listings
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/market-insights"
            className={
              "w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2 " +
              (pathname === "/market-insights" ? "bg-[#A5D7A7]" : "")
            }
          >
            <TrendingUp className="w-5" /> Market Insight
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/chat"
            className={
              "w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2 " +
              (pathname === "/chat" ? "bg-[#A5D7A7]" : "")
            }
          >
            <CpuChipIcon className="w-5" /> AI Chatbot
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/articles"
            className={
              "w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2 " +
              (pathname === "/articles" ? "bg-[#A5D7A7]" : "")
            }
          >
            <DocumentIcon className="w-5" /> Articles
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/settings"
            className={
              "w-full flex items-center gap-2 hover:bg-[#A5D7A7] p-2 " +
              (pathname === "/settings" ? "bg-[#A5D7A7]" : "")
            }
          >
            <Settings className="w-5" /> Settings
          </Link>
        </li>
      </ul>
      <SignOutButton />
    </nav>
  );
}
