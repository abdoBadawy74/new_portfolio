import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Summary from "@/components/Summary/Summary";


export default function Home() {
  return (
    <section className="bg-gray-100 text-gray-800">
      <Header />
      <Hero />
      <Summary />
      <Services/>
    </section>
  );
}
