"use client";

import Container from "@/components/Container";
import authImage from "@/assets/auth.png";
import Header from "@/components/Header";
import Form from "./Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") router.push("/dashboard");

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
      <div className="page-section">
        <Header />
        <Container className="flex items-center justify-start">
          <Form />
        </Container>
      </div>
    </section>
  );
}
