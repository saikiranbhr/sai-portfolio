"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 flex items-center justify-center brutal-border brutal-shadow-sm bg-pop-yellow dark:bg-pop-blue text-primary transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1a1a2e] dark:hover:shadow-[6px_6px_0px_#4ecdc4] cursor-pointer"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -180 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
