"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react";

const startDate = new Date(2018, 6, 11); // July 11, 2018
const years = Math.floor((Date.now() - startDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

const highlights = [
  { icon: Briefcase, label: `${years}+ Years`, description: "Enterprise experience", color: "yellow" as const },
  { icon: GraduationCap, label: "MS in CS", description: "NDSU (3.7 GPA)", color: "blue" as const },
  { icon: Award, label: "Published", description: "ICSME 2024 paper", color: "purple" as const },
  { icon: MapPin, label: "USA", description: "Open to relocation", color: "orange" as const },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            label="About"
            title="Engineering with purpose"
            description="From clinical trial systems to cloud-native data pipelines, I turn complex requirements into elegant, maintainable software."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection direction="left" delay={0.1}>
            <div className="space-y-6 text-muted-light dark:text-muted-dark leading-relaxed">
              <p>
                I started my career building healthcare and clinical trial platforms
                at <strong className="font-heading">Parexel International</strong>, where I developed systems compliant with
                HIPAA, 21 CFR, and GDPR.
              </p>
              <p>
                At <strong className="font-heading">Fortrea (formerly LabCorp)</strong>, I became the go-to SME for integration
                architecture — achieving a{" "}
                <span className="bg-pop-yellow dark:bg-pop-blue px-2 py-0.5 text-primary font-bold">
                  45% reduction in turnaround time
                </span>{" "}
                for Health Records integration.
              </p>
              <p>
                Now at <strong className="font-heading">North Dakota State University</strong>, I bridge research and engineering
                — building tools with React, Python, and containerized deployments while
                contributing to published research at ICSME 2024.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <Card key={i} color={item.color}>
                  <item.icon className="w-6 h-6 mb-3 text-primary" />
                  <div className="font-heading font-bold text-lg uppercase text-primary">{item.label}</div>
                  <div className="text-sm text-primary/70">{item.description}</div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
