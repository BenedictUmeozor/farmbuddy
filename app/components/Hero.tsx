import image from "@/assets/hero.png";
import Container from "@/components/Container";
import PageHeader from "./Header";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
        width: "100%",
      }}
    >
      <Container className="page-section">
        <PageHeader />
        <div className="w-full text-white text-center grid place-items-center">
          <div className="w-full">
            <h2
              className="text-5xl max-md:text-4xl text-center font-semibold mb-6"
              style={{ lineHeight: 1.1 }}
            >
              Empowering Farmers With <br className="max-md:hidden" /> Smart Solutions
            </h2>
            <p className="mb-6 mx-auto max-w-lg max-md:text-base">
              Experience the future of farming with FarmBuddy. Join thousands of
              farmers worldwide who trust our innovative technology to drive
              productivity, sustainability and profitabilty in farming
            </p>
            <Link
              href="/register"
              className="text-primary inline-block py-2 px-4 rounded-full bg-white w-52 hover:bg-primary hover:text-white max-md:w-36"
            >
              Get started
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
