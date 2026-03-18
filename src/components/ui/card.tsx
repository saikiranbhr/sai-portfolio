import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  color?: "default" | "yellow" | "blue" | "purple" | "orange";
}

export function Card({ children, className, hover = true, color = "default" }: CardProps) {
  return (
    <div
      className={clsx(
        "p-6 brutal-border brutal-shadow transition-all duration-150",
        color === "default" && "bg-card-light dark:bg-card-dark text-primary dark:text-white",
        color === "yellow" && "bg-pop-yellow",
        color === "blue" && "bg-pop-blue",
        color === "purple" && "bg-pop-purple text-white",
        color === "orange" && "bg-pop-orange text-white",
        hover && "hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#1a1a2e] dark:hover:shadow-[10px_10px_0px_#4ecdc4] cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
