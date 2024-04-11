import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import Listing from "../../components/Listing";
import rice from "@/assets/rice.png";
import tomatoes from "@/assets/tomatoes.png";

export default function MarketListing() {
  return (
    <div className="rounded shadow p-4">
      <header className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Market Listings</h3>
        <Link
          href="/product-listings"
          className="flex items-center gap-1 text-primary"
        >
          See all <ChevronRight className="w-5" />
        </Link>
      </header>
      <div className="grid grid-cols-2 gap-2 mt-4">
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
      </div>
    </div>
  );
}
