import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";
import X from "@/assets/icons/X";

export default function Footer() {
  return (
    <footer className="py-8 bg-primary text-white">
      <Container className="grid grid-cols-4 gap-6 max-md:grid-cols-1 max-md:gap-12 max-md:text-center">
        <div>
          <Link
            href="/"
            className={`flex items-center gap-2 hover:text-primary`}
          >
            <Image
              src={logo}
              alt="logo"
              height={30}
              width={30}
              className="w-10"
            />
            <p className="text-3xl text-white font-bold jockey-font hover:text-primary">
              Farmbuddy
            </p>
          </Link>
          <div className="mt-6 flex items-center gap-2">
            <Facebook className="w-8 text-white cursor-pointer" />
            <Instagram className="w-8 text-white cursor-pointer" />
            <X className="w-8 text-white cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-white font-bold  hover:text-primary">
            Company
          </h2>
          <ul className="mt-6">
            <li className="block mb-4">
              <Link href="/about">About us</Link>
            </li>
            <li className="block mb-4">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="block">
              <Link href="/investors">Investors</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl text-white font-bold  hover:text-primary">
            Support
          </h2>
          <ul className="mt-6">
            <li className="block mb-4">
              <Link href="/faqs">FAQs</Link>
            </li>
            <li className="block mb-4">
              <Link href="/feedback">Feedback</Link>
            </li>
            <li className="block mb-4">
              <Link href="/privacy-policy">Privacy policy</Link>
            </li>
            <li className="block">
              <Link href="/terms-and-conditions">Terms and conditions</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <Link
            href="/login"
            className="block py-2 w-60 border border-white bg-transparent text-center rounded-full mb-6 text-white hover:bg-white hover:border-primary hover:text-primary max-md:mx-auto"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="block py-2 w-60 border border-white bg-white text-primary text-center rounded-full hover:bg-primary hover:text-white hover:border-white max-md:mx-auto"
          >
            Create an account
          </Link>
        </div>
      </Container>
    </footer>
  );
}
