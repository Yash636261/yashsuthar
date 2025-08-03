import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className=" bg-white">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
