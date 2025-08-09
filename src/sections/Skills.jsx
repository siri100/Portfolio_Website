import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const technical = [
  "JavaScript",
  "MCP Servers",
  "LLM Agents",
  "Ollama Agents",
  "Multi-Agent Systems",
  "LangChain",
  "Automation Frameworks",
  "API Testing",
  "TypeScript",
  "WebdriverIO",
  "Cypress",
  "Playwright",
  "Appium",
  "Selenium",
  "REST Assured",
  "Postman",
  "Docker",
  "Allure",
  "GitHub Actions",
  "Azure DevOps",
];
const soft = [
  "Collaboration",
  "Agile Mindset",
  "Problem Solving",
  "Continuous Learning",
  "Attention to Detail",
  "Mentorship",
];

export const Skills = () => {
  const ref = useRef(null);
  useEffect(() => {
    const cards = ref.current.querySelectorAll(".skill-card");
    // Defensive: always show content
    cards.forEach((el) => {
      el.style.opacity = 1;
    });
    if (cards.length > 0 && gsap) {
      gsap.from(cards, {
        y: 32,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }
  }, []);
  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-6 md:px-10 max-w-6xl mx-auto"
    >
      {/* <div style={{color:'red',fontWeight:'bold'}}>TEST: Skills section is rendering</div> */}
      <h2 className="text-3xl font-semibold tracking-tight text-teal-400 mb-10">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-medium mb-4 text-slate-200">Technical</h3>
          <div className="flex flex-wrap gap-3">
            {technical.map((s) => (
              <span
                key={s}
                className="skill-card px-4 py-2 text-xs font-medium rounded-full bg-slate-800/60 border border-teal-500/20 hover:border-teal-400 hover:text-teal-300 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4 text-slate-200">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {soft.map((s) => (
              <span
                key={s}
                className="skill-card px-4 py-2 text-xs font-medium rounded-full bg-slate-800/60 border border-teal-500/20 hover:border-teal-400 hover:text-teal-300 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
