import React, { createContext, useContext, useState, ReactNode } from "react";
import { useColorScheme as useSystemColorScheme } from "@/hooks/use-color-scheme";

type ColorScheme = "light" | "dark";
type ThemeContextType = {
  colorScheme: ColorScheme;
  toggleTheme: () => void;
  isSystemTheme: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemColorScheme = useSystemColorScheme();
  const [themeOverride, setThemeOverride] = useState<ColorScheme | null>(null);

  const colorScheme = themeOverride ?? systemColorScheme ?? "light";
  const isSystemTheme = themeOverride === null;

  const toggleTheme = () => {
    if (isSystemTheme) {
      // First toggle: set to opposite of system
      setThemeOverride(systemColorScheme === "dark" ? "light" : "dark");
    } else {
      // Subsequent toggles: switch between light and dark
      setThemeOverride(colorScheme === "dark" ? "light" : "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleTheme, isSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

