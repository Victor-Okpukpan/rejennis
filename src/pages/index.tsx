import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  return (
    <main
      className={`${inter.className} relative flex items-center justify-center min-h-screen`}
    >
      {/* <Navbar aboutRef={aboutRef} servicesRef={servicesRef} processRef={processRef} />
      <Hero id="hero" />
      <section ref={aboutRef}>
        <About id="about"/>
      </section>
      <section ref={servicesRef}>
        <Services id="services" />
      </section>
      <section ref={processRef}>
        <Process id="process" />
      </section> */}

      <p className="text-black text-4xl font-semibold">Building in progress</p>
    </main>
  );
}
