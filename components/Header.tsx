import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Container className="py-4 flex items-center justify-between text-white bg-transparent">
        <Logo />
        <nav>
          <ul className="flex items-center gap-16 max-md:gap-8">
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
          </ul>
        </nav>
      </Container>
    </header>
  );
}
