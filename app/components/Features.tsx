import AIPowered from "@/assets/icons/AIPowered";
import Agriculture from "@/assets/icons/Agriculture";
import OfflineStorage from "@/assets/icons/OfflineStorage";
import Pest from "@/assets/icons/Pest";
import ProductListing from "@/assets/icons/ProductListing";
import Weather from "@/assets/icons/Weather";
import Container from "@/components/Container";
import { ReactNode } from "react";

const features = [
  {
    id: 1,
    title: "Product listings",
    description:
      "Manage your fam produce by being able to navigate to the produce listing section. users can also add, manage, update or manage the listings of produce.",
  },
  {
    id: 2,
    title: "Weather updates",
    description:
      "Offers real time, accurate weather forcast based on specific location which include precipitation, humiduty and wind speed",
  },
  {
    id: 3,
    title: "AI powered",
    description:
      "Explore our AI-driven insights and recommendation for crop management practices. Receive guidance on modern faming practices.",
  },
  {
    id: 4,
    title: "Agricultural knowledge",
    description:
      "Curate and provide regular updates on agricultural best practices, techniques, and innovations through articles, blog posts, or newsletters.",
  },
  {
    id: 5,
    title: "Pest alerts",
    description:
      "Our AI algorithms monitor and analyze pest data, providing real-time alerts and recommendations to farmers regarding potential pest outbreaks or infestations. ",
  },
  {
    id: 6,
    title: "Offline article storage",
    description:
      "Get first hand articles, resources, and chat conversations for offline access, users can get access to critical information even in low-connectivity areas.",
  },
];

function Feature({
  desc,
  title,
  children,
}: {
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-2 max-md:flex-col">
      <div className="max-md:flex items-center justify-center max-md:w-full">{children}</div>
      <div>
        <h3 className="text-2xl mb-2 font-bold max-md:text-xl">{title}</h3>
        <p className="text-[0.9rem] text-[#333]">{desc}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="">
      <Container className="h-full py-[5%] max-md:text-center">
        <h2 className="mb-16 text-center text-4xl font-semibold max-md:text-3xl max-md:mb-8">Features</h2>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {features.map((feature) => (
            <Feature
              key={feature.id}
              title={feature.title}
              desc={feature.description}
            >
              {feature.id === 1 ? (
                <ProductListing />
              ) : feature.id === 2 ? (
                <Weather />
              ) : feature.id === 3 ? (
                <AIPowered />
              ) : feature.id === 4 ? (
                <Agriculture />
              ) : feature.id === 5 ? (
                <Pest />
              ) : (
                <OfflineStorage />
              )}
            </Feature>
          ))}
        </div>
      </Container>
    </section>
  );
}
