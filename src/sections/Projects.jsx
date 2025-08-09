import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const projects = [
  {
    title: "AI-Enhanced Cross-Platform Automation",
    desc: "Unified WebdriverIO + Appium framework integrated with OpenAI API to generate adaptive test data & assertions.",
    stack: ["WebdriverIO", "Appium", "OpenAI", "TypeScript", "Allure"],
    live: "#",
    repo: "https://github.com/",
  },
  {
    title: "Cypress Parallel CI Pipeline",
    desc: "Highly parallel Cypress suite with Dockerized containers & GitHub Actions matrix delivering sub-5m feedback.",
    stack: ["Cypress", "Docker", "GitHub Actions", "Allure"],
    live: "#",
    repo: "https://github.com/",
  },
  {
    title: "Mobile Sanity Automation Pack",
    desc: "Daily Appium smoke pack auto-triggered via Azure DevOps, publishing rich execution analytics.",
    stack: ["Appium", "Azure DevOps", "TypeScript", "Allure"],
    live: "#",
    repo: "https://github.com/",
  },
  {
    title: "API Contract & Performance Suite",
    desc: "Combined contract validation & perf baselines; shift-left pipeline gating builds on API quality signals.",
    stack: ["Postman", "k6", "Docker", "CI/CD"],
    live: "#",
    repo: "https://github.com/",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  useEffect(() => {
    const cards = ref.current.querySelectorAll(".project-card");
    // Defensive: always show content
    cards.forEach((el) => {
      el.style.opacity = 1;
    });
    if (cards.length > 0 && gsap) {
      gsap.from(cards, {
        y: 40,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-6 md:px-10 max-w-6xl mx-auto"
    >
      {/* <div style={{color:'red',fontWeight:'bold'}}>TEST: Projects section is rendering</div> */}
      <h2 className="text-3xl font-semibold tracking-tight text-teal-400 mb-10">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="project-card group rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-teal-400/40 p-6 flex flex-col transition shadow-lg shadow-black/20 hover:shadow-teal-500/10"
          >
            <h3 className="text-lg font-medium text-slate-100 group-hover:text-teal-300 transition">
              {p.title}
            </h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-grow">
              {p.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="text-[10px] tracking-wide uppercase px-2 py-1 rounded bg-slate-800/70 text-teal-300 border border-teal-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3 text-xs">
              <a
                href={p.live}
                className="px-3 py-1.5 rounded-md bg-teal-500 text-slate-900 font-medium hover:bg-teal-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={p.repo}
                className="px-3 py-1.5 rounded-md border border-teal-400/60 text-teal-300 hover:bg-teal-400 hover:text-slate-900 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
