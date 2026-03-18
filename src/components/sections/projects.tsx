"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Layers, Zap, Database as DbIcon, Brain } from "lucide-react";

const projects = [
  {
    icon: Zap,
    title: "Data Bridge",
    subtitle: "Enterprise Integration System",
    description:
      "Multi-vendor integration across TIBCO, SFTP, EDC, Medicaid, IBM, and Optum. Configurable S3 buckets adapt in real-time.",
    impact: "Streamlined ETL across 8+ vendor systems",
    tech: ["AWS S3", "AWS Glue", "SSIS", "Kafka", "XML/JSON/CSV", ".NET"],
    color: "yellow" as const,
  },
  {
    icon: Layers,
    title: "Pulse",
    subtitle: "Supply & Inventory Management",
    description:
      "End-to-end supply chain automation with event-driven architecture and serverless workflows.",
    impact: "Automated end-to-end supply chain ops",
    tech: ["Web API", "Kafka", "AWS SQS", "AWS Lambda", "Step Functions"],
    color: "blue" as const,
  },
  {
    icon: DbIcon,
    title: "ClinPhone",
    subtitle: "Clinical Trial Platform",
    description:
      "Clinical trial randomization and supply management systems for pharmaceutical operations.",
    impact: "Mission-critical clinical trial operations",
    tech: [".NET", "Entity Framework", "ADO.NET", "MS SQL", "Bootstrap"],
    color: "purple" as const,
  },
  {
    icon: Brain,
    title: "Imaging System",
    subtitle: "Healthcare AI PoC",
    description:
      "Healthcare imaging with AI/ML anomaly detection for early tumor identification using TensorFlow and OpenCV.",
    impact: "AI-powered early diagnosis support",
    tech: ["React", "Python", "TensorFlow", "OpenCV", "Azure"],
    color: "orange" as const,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t-3 border-b-3 border-primary dark:border-pop-blue bg-pop-yellow/5 dark:bg-pop-blue/5">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="Projects"
            title="Systems I've built"
            description="Enterprise-grade solutions across healthcare, supply chain, and data integration."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <Card color={project.color} className="h-full group">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 flex items-center justify-center brutal-border bg-card-light text-primary">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-bold text-xs uppercase tracking-widest opacity-50">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-primary">
                  {project.title}
                </h3>
                <p className="text-sm font-heading font-semibold text-primary/70 uppercase tracking-wider mt-0.5">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-primary/70 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold font-heading text-primary uppercase">
                  <Zap className="w-4 h-4" />
                  {project.impact}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs font-bold font-heading uppercase bg-white/40 text-primary border-2 border-primary/80">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
