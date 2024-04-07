import Container from "@/components/Container";
import authImage from "@/assets/auth.png";
import Header from "@/components/Header";
import Form from "./Form";

export default function Page() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${authImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="min-h-screen">
        <Header />
        <Container className="flex items-center justify-start">
          <Form />
        </Container>
      </div>
    </section>
  );
}
