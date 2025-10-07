import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = window.localStorage.getItem("fusion-theme");
    const initial = stored ?? (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", initial === "dark");
    setIsDark(initial === "dark");
    setReady(true);
  }, []);

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("fusion-theme", next);
    setIsDark(next === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground shadow-sm transition hover:shadow-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {ready ? (
        isDark ? (
          <SunMedium className="h-5 w-5" />
        ) : (
          <MoonStar className="h-5 w-5" />
        )
      ) : (
        <SunMedium className="h-5 w-5" />
      )}
    </button>
  );
};
