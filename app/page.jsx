import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Skills from "@/components/skills/Skills";
import Summary from "@/components/Summary/Summary";


export default function Home() {
  return (
    <section className="bg-gray-100 text-gray-800">
      <Header />
      <Hero />
      <Summary />
      <Services/>
      <Projects />
      <Skills />
      <Education/>
      <Contact/>
    </section>
  );
}
