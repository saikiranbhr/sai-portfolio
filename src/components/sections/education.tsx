"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    addendum: "Certificate in Big Data Statistical Analysis",
    school: "North Dakota State University",
    gpa: "3.7 / 4.0",
    year: "2024",
    color: "yellow" as const,
  },
  {
    degree: "Executive Post Graduation in Data Science",
    school: "IIIT Bangalore",
    gpa: "3.6 / 4.0",
    year: "2023",
    color: "blue" as const,
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Acharya Nagarjuna University",
    gpa: "3.6 / 4.0",
    year: "2018",
    color: "purple" as const,
  },
];

const certifications = [
  "TRec - Test Recommender (Published at ICSME 2024)",
  "Azure Fundamentals (AZ-900) — Microsoft",
  "Certified Data Processing Specialist — Aspiring Minds",
  "SAS Base Programmer (SAS-231) — SAS",
];

export function Education() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="Education & Certs"
            title="Academic foundation"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection direction="left" delay={0.1}>
            <h3 className="flex items-center gap-3 font-heading font-bold text-xl uppercase tracking-wider mb-6">
              <span className="w-10 h-10 flex items-center justify-center brutal-border bg-pop-yellow text-primary">
                <GraduationCap className="w-5 h-5" />
              </span>
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <Card key={i} color={edu.color} hover={true}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-heading font-bold uppercase text-sm tracking-wider text-primary">{edu.degree}</h4>
                      {edu.addendum && (
                        <p className="text-xs font-heading font-semibold text-primary/70 uppercase tracking-wider">{edu.addendum}</p>
                      )}
                      <p className="text-sm text-primary/80 mt-1">{edu.school}</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <span className="inline-block px-3 py-1 bg-white/70 text-primary font-bold font-heading text-sm brutal-border">
                        {edu.gpa}
                      </span>
                      <p className="text-xs text-primary/80 mt-1 font-heading font-bold">{edu.year}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <h3 className="flex items-center gap-3 font-heading font-bold text-xl uppercase tracking-wider mb-6">
              <span className="w-10 h-10 flex items-center justify-center brutal-border bg-pop-blue text-primary">
                <Award className="w-5 h-5" />
              </span>
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 brutal-border brutal-shadow-sm bg-card-light dark:bg-card-dark hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_#1a1a2e] dark:hover:shadow-[7px_7px_0px_#4ecdc4] transition-all duration-150 cursor-default"
                >
                  <span className="text-accent font-bold text-lg leading-none mt-0.5">*</span>
                  <span className="text-sm font-heading text-primary dark:text-white">{cert}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
