import Link from "next/link";
import { ChevronRight } from "react-feather";
import book from "@/assets/books.png";
import Image from "next/image";

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
        <div className="flex flex-col h-64 p-4 rounded-lg shadow">
          <div className="h-[70%] flex items-center justify-center">
            <Image
              src={book}
              alt="image"
              height={100}
              width={100}
              className="w-full"
            />
          </div>
          <div className="h-[30%] py-2">
            <p className="font-semibold">Journal of Forestry Engineering</p>
            <p className="text-right text-primary">Read</p>
          </div>
        </div>
        <div className="flex flex-col h-64 p-4 rounded-lg shadow">
          <div className="h-[70%] flex items-center justify-center">
            <Image
              src={book}
              alt="image"
              height={100}
              width={100}
              className="w-full"
            />
          </div>
          <div className="h-[30%] py-2">
            <p className="font-semibold">Journal of Forestry Engineering</p>
            <p className="text-right text-primary">Read</p>
          </div>
        </div>
      </div>
    </div>
  );
}
