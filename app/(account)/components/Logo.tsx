import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 hover:text-primary ${className}`}
    >
      <Image src={logo} alt="logo" height={30} width={30} className="w-8" />
      <p className="text-3xl text-white font-bold jockey-font">Farmbuddy</p>
    </Link>
  );
}
