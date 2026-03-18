"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { clsx } from "clsx";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-150",
          scrolled
            ? "backdrop-blur-sm border-b-3 scrolled-header"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-heading font-bold text-2xl uppercase tracking-tighter hover:text-accent transition-colors"
          >
            SK<span className="text-accent">_</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-bold font-heading uppercase tracking-wider hover:bg-pop-yellow hover:text-primary dark:hover:bg-pop-blue dark:hover:text-primary transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 text-sm font-bold font-heading uppercase tracking-wider bg-accent text-white brutal-border brutal-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1a1a2e] dark:hover:shadow-[6px_6px_0px_#4ecdc4] transition-all duration-150"
            >
              Resume
            </a>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center brutal-border brutal-shadow-sm bg-card-light dark:bg-card-dark hover:bg-pop-yellow dark:hover:bg-pop-blue hover:text-primary transition-all duration-150 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed inset-0 z-40 bg-surface-light dark:bg-surface-dark pt-20 md:hidden"
          >
            <nav className="flex flex-col items-center gap-4 pt-8">
              {navLinks.map((link, i) => {
                const colors = ["bg-pop-yellow", "bg-pop-blue", "bg-pop-purple text-white", "bg-accent text-white"];
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`font-heading text-2xl font-bold uppercase tracking-wider px-8 py-4 brutal-border brutal-shadow ${colors[i % colors.length]} text-primary hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-150`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="font-heading text-2xl font-bold uppercase tracking-wider px-8 py-4 brutal-border brutal-shadow bg-accent text-white hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-150"
              >
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
