"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Cloud,
  BarChart3,
  Wrench,
  Globe,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    color: "yellow" as const,
    skills: [
      "C#", ".NET MVC", "ASP.NET", "Entity Framework", "Dapper",
      "React", "Angular", "TypeScript", "JavaScript", "HTML/CSS",
      "Python", "LINQ",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    color: "blue" as const,
    skills: [
      "MS SQL", "PostgreSQL", "MySQL", "Oracle", "MongoDB",
      "NoSQL", "T-SQL", "SSRS", "SSIS", "Athena", "Spark",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "purple" as const,
    skills: [
      "AWS S3", "AWS Lambda", "AWS Glue", "AWS RDS", "API Gateway",
      "Azure SQL", "Azure Blob", "Docker", "Kubernetes", "Podman",
      "CI/CD", "RHEL",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    color: "orange" as const,
    skills: [
      "Python", "SAS", "R", "R-Shiny", "TensorFlow",
      "OpenCV", "Data Visualization", "ETL Pipelines",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    color: "default" as const,
    skills: [
      "Visual Studio", "VS Code", "SSMS", "Git", "GitLab",
      "Jira", "ServiceNow", "Postman", "Swagger", "Docker",
    ],
  },
  {
    icon: Globe,
    title: "Domain Expertise",
    color: "default" as const,
    skills: [
      "Healthcare", "Clinical Trials", "Supply Chain",
      "HIPAA", "21 CFR", "GDPR", "GCP", "IRT/RTSM",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t-3 border-b-3 border-primary dark:border-pop-blue bg-pop-yellow/5 dark:bg-pop-blue/5">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="Skills"
            title="My toolkit"
            description="A broad and deep skill set built across healthcare, finance, and research domains."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.1}>
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center brutal-border bg-pop-yellow dark:bg-pop-blue text-primary">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold uppercase tracking-wider text-sm">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
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
