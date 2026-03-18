"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "saikiranbhr@gmail.com",
    href: "mailto:saikiranbhr@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/saikiranbhr",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (701) 540-2910",
    href: "tel:+17015402910",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="Contact"
            title="Let's build something great"
            description="I'm open to new opportunities, collaborations, and interesting conversations."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between p-6 rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <link.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-light dark:text-muted-dark">
                        {link.label}
                      </div>
                      <div className="font-heading font-semibold">{link.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-light dark:text-muted-dark group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
