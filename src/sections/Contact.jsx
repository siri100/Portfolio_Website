import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const ref = useRef(null);
  useEffect(() => {
    gsap.from(ref.current, {
      y: 40,
      autoAlpha: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  const onSubmit = (data) => {
    // Placeholder: integrate email service or backend
    console.log("Contact form submit", data);
    reset();
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-10 max-w-4xl mx-auto"
      ref={ref}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-teal-400 mb-8">
        Contact
      </h2>
      <p className="text-slate-400 text-sm md:text-base max-w-2xl">
        Interested in collaborating or want to discuss QA automation strategy?
        Reach out via the form below or connect on LinkedIn / GitHub.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 grid gap-6">
        <div className="grid gap-2">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-wide text-slate-400"
          >
            Name
          </label>
          <input
            id="name"
            className="px-4 py-3 rounded-md bg-slate-900/60 border border-slate-700/60 focus:border-teal-400 focus:outline-none"
            placeholder="Your name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-xs text-red-400">Name is required</span>
          )}
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-wide text-slate-400"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="px-4 py-3 rounded-md bg-slate-900/60 border border-slate-700/60 focus:border-teal-400 focus:outline-none"
            placeholder="you@example.com"
            {...register("email", { required: true, pattern: /.+@.+\..+/ })}
          />
          {errors.email && (
            <span className="text-xs text-red-400">Valid email required</span>
          )}
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="message"
            className="text-xs uppercase tracking-wide text-slate-400"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="px-4 py-3 rounded-md bg-slate-900/60 border border-slate-700/60 focus:border-teal-400 focus:outline-none resize-none"
            placeholder="Your message"
            {...register("message", { required: true, minLength: 10 })}
          />
          {errors.message && (
            <span className="text-xs text-red-400">
              Message (10+ chars) required
            </span>
          )}
        </div>
        <button
          type="submit"
          className="justify-self-start inline-flex items-center gap-2 px-6 py-3 rounded-md bg-teal-500 text-slate-900 font-medium shadow hover:-translate-y-0.5 hover:shadow-teal-500/40 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-12 flex flex-wrap gap-5 text-sm">
        <a
          href="mailto:srinivas.madnal@gmail.com"
          className="text-teal-300 hover:text-teal-200 transition"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/srinivas-madnal-a670aa97/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 hover:text-teal-200 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/siri100"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 hover:text-teal-200 transition"
        >
          GitHub
        </a>
      </div>
      {isSubmitSuccessful && (
        <p className="mt-6 text-teal-400 text-sm">Message sent! Thank you.</p>
      )}
    </section>
  );
};
