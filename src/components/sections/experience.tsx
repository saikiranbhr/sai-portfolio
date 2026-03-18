"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    role: "Database and Backend Engineer",
    company: "North Dakota State University",
    period: "Jan 2025 — Present",
    description:
      "Designing research applications using React, Python, .NET, and containerized deployments on RHEL.",
    highlights: [
      "Published research at ICSME 2024",
      "Containerized solutions with Docker & Kubernetes",
      "Database optimization with PostgreSQL & MS-SQL",
    ],
    tech: ["React", "Python", ".NET", "PostgreSQL", "Docker", "Kubernetes"],
    color: "yellow" as const,
  },
  {
    role: "Research Assistant",
    company: "North Dakota State University",
    period: "Aug 2023 — Aug 2024",
    description:
      "Built research tools and contributed to data visualization and analysis for academic papers.",
    highlights: [
      "Advanced data visualization with Python & R",
      "Version-controlled research applications",
      "Repository scraping and analysis tools",
    ],
    tech: ["Python", "R", "Git", "Shell Scripting"],
    color: "blue" as const,
  },
  {
    role: "Programmer Analyst (SME)",
    company: "Fortrea (formerly LabCorp)",
    period: "Mar 2021 — Aug 2023",
    description:
      "SME for integration architecture. 45% reduction in Health Records integration turnaround time.",
    highlights: [
      "45% reduction in integration turnaround time",
      "Scalable frameworks with AWS S3, Kafka, Lambda",
      "Automated ETL workflows with AWS Glue",
    ],
    tech: ["AWS", "Kafka", "S3", "Lambda", "Glue", ".NET"],
    color: "purple" as const,
  },
  {
    role: "Senior Software Engineer",
    company: "Calyx.ai (formerly Parexel)",
    period: "Jul 2018 — Mar 2021",
    description:
      "Developed clinical trial and healthcare systems with .NET MVC. HIPAA, 21 CFR, GDPR compliant.",
    highlights: [
      "Clinical trial systems (ClinPhone, Pulse)",
      "HIPAA, 21 CFR, GDPR compliant apps",
      "Complex SQL optimization & SSRS reporting",
    ],
    tech: [".NET MVC", "ADO.NET", "MS SQL", "SSRS", "Web API"],
    color: "orange" as const,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="Experience"
            title="Where I've made impact"
            description="From clinical trials to cloud data pipelines."
          />
        </AnimatedSection>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
              <Card className="relative overflow-visible">
                {/* Color stripe */}
                <div className={`absolute top-0 left-0 w-2 h-full ${
                  exp.color === "yellow" ? "bg-pop-yellow" :
                  exp.color === "blue" ? "bg-pop-blue" :
                  exp.color === "purple" ? "bg-pop-purple" :
                  "bg-pop-orange"
                }`} />

                <div className="pl-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading font-bold text-xl uppercase tracking-tight">{exp.role}</h3>
                      <p className="text-sm text-muted-light dark:text-muted-dark font-heading">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-4 py-1 bg-accent text-white text-sm font-bold font-heading uppercase tracking-wider brutal-border shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-light dark:text-muted-dark text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5">+</span>
                        <span className="text-muted-light dark:text-muted-dark">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="outline">{t}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
