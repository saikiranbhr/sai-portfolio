"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const startDate = new Date(2018, 6, 11); // July 11, 2018
const years = Math.floor(
  (Date.now() - startDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);

const marqueeText = ` SAI KIRAN B  //  LEAD SOFTWARE ENGINEER  //  ${years}+ YEARS  //  .NET  //  REACT  //  AWS  //  AZURE  //  DOCKER  //  `;

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border-4 border-pop-yellow dark:border-pop-blue opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-pop-purple/10 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/10 rotate-45"
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#1a1a2e 2px, transparent 2px), linear-gradient(90deg, #1a1a2e 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-pop-yellow dark:bg-pop-blue text-primary font-heading font-bold text-sm uppercase tracking-wider brutal-border brutal-shadow-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] uppercase"
          >
            <span className="text-gradient">Sai Kiran B</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.35,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[0.95] uppercase mt-4"
          >
            I build{" "}
            <span className="text-accent">scalable</span> systems that{" "}
            <span className="relative inline-block">
              <span>solve</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-pop-yellow/30 dark:bg-pop-blue/30 -skew-x-6" />
            </span>{" "}
            real problems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-muted-light dark:text-muted-dark max-w-2xl leading-relaxed"
          >
            Lead Software Engineer with {years}+ years crafting end-to-end
            solutions — from high-throughput integration systems to clinical
            trial platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="mailto:saikiranbhr@gmail.com" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
            <Button href="#projects" variant="secondary" size="lg">
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              {
                icon: Mail,
                href: "mailto:saikiranbhr@gmail.com",
                label: "Email",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/saikiranbhr",
                label: "LinkedIn",
              },
              { icon: FileText, href: "/resume.pdf", label: "Resume" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="w-10 h-10 flex items-center justify-center brutal-border brutal-shadow-sm bg-card-light dark:bg-card-dark text-primary dark:text-white hover:bg-pop-yellow dark:hover:bg-pop-blue hover:text-primary transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 right-0 py-4 border-t-3 border-primary dark:border-pop-blue bg-pop-yellow dark:bg-pop-blue text-primary overflow-hidden"
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          <span className="font-heading font-bold text-sm tracking-widest uppercase">
            {marqueeText}
            {marqueeText}
          </span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-primary dark:text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
