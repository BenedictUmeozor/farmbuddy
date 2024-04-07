import Logo from "@/components/Logo";
import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="py-6 flex items-center justify-between text-white bg-transparent w-full">
      <Logo className="flex-1" />
      <nav className="flex-[2] grid place-items-center">
        <ul className="flex items-center justify-around w-full">
          <li>
            <Link href="/" className="font-semibold hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/faqs" className="font-semibold hover:text-primary">
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-semibold hover:text-primary">
              About us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1 flex items-center justify-end">
        <Link
          href="/login"
          className="text-primary inline-block text-center py-2 px-4 rounded-full bg-white w-40 hover:bg-primary hover:text-white"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
