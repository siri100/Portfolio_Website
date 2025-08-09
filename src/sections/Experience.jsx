import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const roles = [
  {
    company: "EPAM Systems",
    companyUrl: "https://www.epam.com/",
    role: "Software Test Automation Engineer",
    period: "APR 2025 – PRESENT (5 MONTHS)",
    location: "BENGALURU, KARNATAKA, INDIA",
    achievements: [
      "Building scalable & maintainable automation frameworks for Web, Mobile & API platforms (WebdriverIO, Playwright, Cypress, Selenium, Appium on real devices).",
      "Designing modular, reusable JS/TS frameworks adopting BDD/TDD (Cucumber, Mocha) and clean architecture patterns.",
      "Implementing API automation with SuperTest & Axios to ensure reliability, performance & contract stability.",
      "Integrating automation suites into Jenkins, Azure DevOps & AWS pipelines for continuous feedback and rapid gating.",
      "Driving smart automation strategy & selective AI-driven enhancements to boost quality signals & release confidence.",
      "Championing code quality, maintainability, flake reduction & observability across test layers.",
    ],
  },
  {
    company: "Marsh McLennan Global Services India (MMGS)",
    companyUrl: "https://www.marshmclennan.com/",
    role: "Senior Engineer – IT Quality & Assurance Testing",
    period: "MAY 2023 – APR 2025 (2 YEARS)",
    location: "MUMBAI, MAHARASHTRA, INDIA",
    achievements: [
      "Led QA automation initiatives across web & mobile product lines improving regression turnaround time.",
      "Expanded coverage with hybrid suites (Selenium / Cypress / Appium) & introduced analytics for stability trends.",
      "Collaborated with DevOps to streamline CI/CD quality gates & parallel execution strategy.",
      "Mentored team members on test design, reliability engineering & shift-left quality practices.",
    ],
  },
  {
    company: "Amiti Software Technologies Pvt. Ltd.",
    companyUrl: "https://www.amiti.in/",
    role: "QA Engineer",
    period: "FEB 2020 – MAY 2023 (3 YRS 4 MOS)",
    location: "BANGALORE URBAN, KARNATAKA, INDIA",
    achievements: [
      "Executed end-to-end product testing across Web, Mobile & API layers combining manual & automation approaches.",
      "Developed foundational web automation suites and contributed to mobile & API test harnesses.",
      "Improved defect detection early in sprints by refining exploratory + risk-based testing strategy.",
      "Documented test processes & supported knowledge transfer to new team members.",
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  useEffect(() => {
    const items = ref.current.querySelectorAll(".exp-item");
    gsap.from(items, {
      x: -40,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
    });
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-6 md:px-10 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-semibold tracking-tight text-teal-400 mb-12">
        Experience
      </h2>
      <ol className="relative border-l-4 border-teal-500/60 ml-3">
        {roles.map((r) => (
          <li
            key={r.company}
            className="exp-item mb-12 ml-8 pl-6 relative bg-slate-950/95 rounded-lg shadow-sm border border-slate-800"
          >
            <span className="absolute -left-7 top-6 h-4 w-4 rounded-full border-2 border-teal-400 bg-slate-900"></span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-200">
                {r.role}{" "}
                <span className="text-teal-400 font-bold">
                  ·{" "}
                  <a
                    href={r.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-teal-300"
                  >
                    {r.company}
                  </a>
                </span>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 mb-2">
              <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold">
                {r.period}
              </span>
              <span className="hidden sm:inline text-xs text-slate-500">|</span>
              <span className="text-xs uppercase tracking-wider text-slate-400">
                {r.location}
              </span>
            </div>
            <ul className="mt-2 space-y-2 text-sm text-slate-300 list-disc list-inside">
              {r.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};
