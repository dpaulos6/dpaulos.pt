"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button aria-label="Toggle theme" size="sm" variant="outline">
        <span className="hidden sm:inline">Theme</span>
      </Button>
    );
  }

  const activeTheme = resolvedTheme ?? theme;
  const isDark = activeTheme === "dark";

  return (
    <Button
      aria-label="Toggle theme"
      className="gap-2"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      size="sm"
      variant="outline"
    >
      {isDark ? (
        <SunMedium className="size-3.5" />
      ) : (
        <Moon className="size-3.5" />
      )}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </Button>
  );
}
