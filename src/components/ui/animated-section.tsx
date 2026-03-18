"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clsx } from "clsx";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      rotate: direction === "left" ? -2 : direction === "right" ? 2 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}
