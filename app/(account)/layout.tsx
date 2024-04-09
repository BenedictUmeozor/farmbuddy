import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Logo from "./components/Logo";
import SideBar from "./components/SideBar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farmbuddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {" "}
        <section className="grid grid-cols-12 max-w-[1800px] mx-auto min-h-screen">
          <div className="bg-primary text-white col-span-2 p-4 side-bar">
            <div>
              <Logo />
            </div>
            <SideBar />
          </div>
          <div className="col-span-10 min-h-screen overflow-y-auto">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
