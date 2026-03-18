import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

const colorCycle = [
  "bg-pop-yellow text-primary",
  "bg-pop-blue text-primary",
  "bg-pop-purple text-white",
  "bg-pop-orange text-white",
  "bg-accent text-white",
];

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 text-xs font-bold font-heading uppercase tracking-wider border-2 border-primary dark:border-pop-blue transition-all duration-150",
        variant === "default" && "bg-surface-light dark:bg-surface-dark text-primary dark:text-white",
        variant === "accent" && "bg-accent text-white",
        variant === "outline" && "bg-transparent text-primary dark:text-white",
        "hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#1a1a2e] dark:hover:shadow-[4px_4px_0px_#4ecdc4]",
        className
      )}
    >
      {children}
    </span>
  );
}
