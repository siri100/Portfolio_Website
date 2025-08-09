import React, { useEffect, useRef, useState } from "react";
import { Hero } from "./sections/Hero.jsx";
import { About } from "./sections/About.jsx";
import { Skills } from "./sections/Skills.jsx";
import { Projects } from "./sections/Projects.jsx";
import { Experience } from "./sections/Experience.jsx";
import { Contact } from "./sections/Contact.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Global reveal animation on mount
  useEffect(() => {
    gsap.utils.toArray(".reveal-on-scroll").forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 48 },
        {
          duration: 0.9,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="font-sans bg-slate-950 text-slate-200">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
