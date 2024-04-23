import Link from "next/link";
import { ChevronRight } from "react-feather";
import book from "@/assets/books.png";
import Image from "next/image";
import Book from "../../components/Book";

export default function Jornals() {
  return (
    <div className="rounded shadow p-4">
      <header className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Journals</h3>
        <Link href="/articles" className="flex items-center gap-1 text-primary">
          See all <ChevronRight className="w-5" />
        </Link>
      </header>
      <div className="mt-4 grid grid-cols-2">
        <Book title="Journal of Forestry Engineering" />
        <Book title="Journal of Forestry Engineering" />
      </div>
    </div>
  );
}
