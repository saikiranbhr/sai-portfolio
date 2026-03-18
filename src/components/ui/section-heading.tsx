import { clsx } from "clsx";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={clsx("mb-16", align === "center" && "text-center")}>
      <span className="inline-block bg-pop-yellow dark:bg-pop-blue text-primary px-4 py-1.5 text-sm font-bold font-heading uppercase tracking-widest brutal-border brutal-shadow-sm mb-4">
        {label}
      </span>
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] uppercase">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-light dark:text-muted-dark max-w-2xl text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
