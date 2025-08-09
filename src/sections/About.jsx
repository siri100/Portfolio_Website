import React from "react";

export const About = () => (
  <section
    id="about"
    className="relative py-24 px-6 md:px-10 max-w-6xl mx-auto reveal-on-scroll"
  >
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="/images/dp3.jpg"
          alt="Portrait of Srinivas Madnal"
          className="rounded-xl w-full max-w-sm mx-auto shadow-lg shadow-teal-500/10 ring-1 ring-teal-500/20"
          loading="lazy"
        />
      </div>
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-teal-400">
          About Me
        </h2>
        <p className="mt-6 leading-relaxed text-slate-300 text-sm md:text-base">
          I am a QA Test Automation Engineer focused on designing and delivering
          robust, scalable, and maintainable automation frameworks. I specialize
          in WebdriverIO, Cypress, Playwright, Selenium, Appium, REST API
          validation, performance considerations, and CI/CD integration. I build
          custom agents powered by LLMs and MCP servers to accelerate framework
          development and significantly reduce test automation scripting time. I
          enjoy transforming manual regression suites into lean automated
          pipelines with rich reporting and analytics (Allure, custom
          dashboards). I advocate for shift-left quality, pairing with
          developers, and enabling continuous delivery with confidence. Tooling
          & Practices: WebdriverIO, Cypress, Appium, Playwright, Selenium,
          JavaScript/TypeScript, API Automation, Postman, Docker, GitHub Actions
          / Azure DevOps, Allure, BDD (Cucumber), Page Object & Screenplay
          patterns, Test Data Strategy, Parallelization, Containerized Test
          Runners, LLM-powered custom agents, MCP servers.
        </p>
        <p className="mt-4 leading-relaxed text-slate-300 text-sm md:text-base">
          Tooling & Practices: WebdriverIO, Cypress, Appium, Playwright,
          Selenium, JavaScript/TypeScript, API Automation, Postman, Docker,
          GitHub Actions / Azure DevOps, Allure, BDD (Cucumber), Page Object &
          Screenplay patterns, Test Data Strategy, Parallelization,
          Containerized test runners.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm">
          {[
            "WebdriverIO",
            "Cypress",
            "Appium",
            "Playwright",
            "Selenium",
            "Allure",
            "Docker",
            "CI/CD",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
