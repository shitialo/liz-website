"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-[100] p-3 rounded-full transition-all duration-300
                 /* LIGHT MODE: White semi-transparent box with navy icon */
                 bg-white/80 text-navy-deep border border-navy-deep/20
                 /* DARK MODE: Navy semi-transparent box with gold icon */
                 dark:bg-navy-deep/80 dark:text-gold-accent dark:border-white/20
                 backdrop-blur-md shadow-lg hover:scale-110 active:scale-95 group"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
      ) : (
        <Moon className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
}