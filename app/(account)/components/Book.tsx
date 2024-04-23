import book from "@/assets/books.png";
import Image from "next/image";

type Props = {
  title: string;
};

export default function Book({ title }: Props) {
  return (
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
        <p className="font-semibold">{title}</p>
        <p className="text-right text-primary">Read</p>
      </div>
    </div>
  );
}
