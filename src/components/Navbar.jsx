import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    gsap.from(".nav-item", {
      y: -20,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/70 border-b border-teal-500/10">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="font-semibold tracking-tight text-teal-400 text-lg"
        >
          Srinivas<span className="text-accent-teal">.</span>
        </a>
        <button
          aria-label="Toggle theme"
          onClick={() => setDark((d) => !d)}
          className="mr-4 hidden sm:inline-flex p-2 rounded-md hover:bg-slate-800 transition"
        >
          {dark ? "🌙" : "☀️"}
        </button>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href} className="nav-item">
              <a
                href={l.href}
                className="relative py-1 text-slate-300 hover:text-teal-300 transition"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-teal-400 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-md hover:bg-slate-800 transition"
          >
            {dark ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="p-2 rounded-md hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-500"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`h-0.5 bg-teal-400 transition ${
                  open ? "rotate-45 translate-y-[6px]" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 bg-teal-400 transition ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 bg-teal-400 transition ${
                  open ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>
      {open && (
        <div
          className="md:hidden px-4 pb-6"
          role="dialog"
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 px-3 rounded-md bg-slate-800/60 backdrop-blur hover:bg-slate-800 text-sm"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
