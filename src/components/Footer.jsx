import React from "react";

export const Footer = () => (
  <footer className="mt-24 border-t border-slate-800 py-8 text-center text-xs text-slate-500">
    <p>
      &copy; {new Date().getFullYear()} Srinivas Madnal. All rights reserved.
    </p>
    <a
      href="#home"
      className="fixed bottom-5 right-5 p-3 rounded-full bg-teal-500 text-slate-900 font-semibold shadow-lg hover:bg-teal-400 transition"
      aria-label="Back to top"
    >
      ↑
    </a>
  </footer>
);
