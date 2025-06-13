"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [progress, setProgress] = React.useState(1);
  const [targetTheme, setTargetTheme] = React.useState<string | null>(null);

  const handleThemeChange = (theme: string) => {
    setTargetTheme(theme);
    setIsTransitioning(true);
    setProgress(1);

    // Simulasi progress 1 → 100
    let current = 1;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 5; // acak biar kesannya realistis
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setTheme(theme);
          setIsTransitioning(false);
        }, 300); // Delay sedikit setelah 100%
      }
      setProgress(current);
    }, 40); // kecepatan loading
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleThemeChange("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleThemeChange("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* FULLSCREEN OVERLAY + LOADING */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="theme-loading"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Loading {progress}%
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
