import HeaderThree from "../components/HeaderThree";
import rice from "@/assets/rice.png";
import tomatoes from "@/assets/tomatoes.png";
import Listing from "../components/Listing";
import Image from "next/image";

export default function Page() {
  return (
    <section className="p-6 pb-12">
      <HeaderThree />
      <div className="grid grid-cols-3 gap-12 mt-10 w-[90%]">
        <Listing name="Rice" price={70}>
          <Image
            src={rice}
            alt="rice"
            height={100}
            width={100}
            className="w-full"
          />
        </Listing>
        <Listing name="Tomatoes" price={70}>
          <Image
            src={tomatoes}
            alt="rice"
            height={100}
            width={100}
            className="w-full"
          />
        </Listing>
        <Listing name="Rice" price={70}>
          <Image
            src={rice}
            alt="rice"
            height={100}
            width={100}
            className="w-full"
          />
        </Listing>
        <Listing name="Tomatoes" price={70}>
          <Image
            src={tomatoes}
            alt="rice"
            height={100}
            width={100}
            className="w-full"
          />
        </Listing>
        <Listing name="Rice" price={70}>
          <Image
            src={rice}
            alt="rice"
            height={100}
            width={100}
            className="w-full"
          />
        </Listing>
        <Listing name="Tomatoes" price={70}>
          <Image
            src={tomatoes}
            alt="rice"
            height={100}
            width={100}
            className="w-full"
          />
        </Listing>
        <Listing name="Rice" price={70}>
          <Image
            src={rice}
            alt="rice"
            height={100}
            width={100}
            className="w-full"
          />
        </Listing>
        <Listing name="Tomatoes" price={70}>
          <Image
            src={tomatoes}
            alt="rice"
            height={100}
            width={100}
            className="w-full"
          />
        </Listing>
        <Listing name="Tomatoes" price={70}>
          <Image
            src={tomatoes}
            alt="rice"
            height={100}
            width={100}
            className="w-full"
          />
        </Listing>
      </div>
    </section>
  );
}
