import Container from "@/components/Container";
import image1 from "@/assets/showcase1.png";
import image2 from "@/assets/showcase2.png";
import image3 from "@/assets/showcase3.png";
import Image from "next/image";

export default function Showcase() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center">
      <div className="absolute w-full h-[40%] top-0 left-0 bg-white z-[-1]"></div>
      <div className="absolute w-full h-[60%] bottom-0 left-0 bg-primary z-[-1]"></div>
      <Container className="h-full py-[7.5%] z-[2]">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 rounded-[50%]">
            <Image
              src={image1}
              height={200}
              width={200}
              alt="image"
              className="w-full max-w-full rounded-[50%]"
            />
          </div>
          <div className="flex-1 rounded-[50%]">
            <Image
              src={image2}
              height={200}
              width={200}
              alt="image"
              className="w-full max-w-full rounded-[50%]"
            />
          </div>
          <div className="flex-1 rounded-[50%]">
            <Image
              src={image3}
              height={200}
              width={200}
              alt="image"
              className="w-full max-w-full rounded-[50%]"
            />
          </div>
        </div>
        <p className="mt-[10%] text-center text-xl text-white">
          Get ready to have a better farming experience with precision farming
        </p>
      </Container>
    </section>
  );
}