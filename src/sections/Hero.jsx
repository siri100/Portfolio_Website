import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Hero = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-title", {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-tagline",
          { y: 40, autoAlpha: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".hero-cta",
          {
            y: 30,
            autoAlpha: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // Animated gradient loop
      gsap.to(".hero-bg", {
        backgroundPosition: "200% center",
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 hero-bg bg-[linear-gradient(110deg,#0f172a,#134e4a,#0f172a)] bg-[length:200%_200%]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.15),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-500">
          Srinivas Madnal — QA Test Automation Engineer
        </h1>
        <p className="hero-tagline mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
          Building next-gen test automation solutions by leveraging MCP servers,
          intelligent agents, and multi-agent systems powered by LLMs. Driving
          innovation in web, mobile, and API testing with a focus on
          reliability, performance, and seamless CI/CD integration.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/Srinivas%20Madnal%20Resume.pdf"
            className="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-md bg-teal-500 text-slate-900 font-medium shadow hover:-translate-y-0.5 hover:shadow-teal-500/40 transition transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="hero-cta inline-flex items-center gap-2 px-6 py-3 rounded-md border border-teal-400/60 text-teal-300 font-medium hover:bg-teal-400 hover:text-slate-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
