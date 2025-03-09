import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Summary from "@/components/Summary/Summary";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-gray-100 text-gray-800">
      <Header />
      <Hero />
      <Summary />
    </section>
  );
}
