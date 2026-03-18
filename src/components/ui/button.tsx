import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center font-heading font-bold uppercase tracking-wider brutal-border transition-all duration-150 cursor-pointer",
    "hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_#1a1a2e] dark:hover:shadow-[6px_6px_0px_#4ecdc4]",
    "active:translate-x-0 active:translate-y-0 active:shadow-none",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-6 py-3 text-base",
    size === "lg" && "px-8 py-4 text-lg",
    variant === "primary" && "bg-accent text-white brutal-shadow",
    variant === "secondary" && "bg-pop-yellow text-primary brutal-shadow",
    variant === "ghost" && "bg-transparent text-primary dark:text-white border-2 border-primary dark:border-pop-blue",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
