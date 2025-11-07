import { usePreferences } from "@/contexts/PreferencesContext";
import { useColorScheme as useSystemColorScheme } from "@/hooks/use-color-scheme";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";

type ColorScheme = "light" | "dark";

type ThemeContextType = {
  colorScheme: ColorScheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemColorScheme = useSystemColorScheme();
  const { preferences, updateTheme } = usePreferences();

  const colorScheme = preferences.theme ?? systemColorScheme ?? "light";
  const isSystemTheme = preferences.theme === null;

  const toggleTheme = useCallback(() => {
    if (isSystemTheme) {
      // First toggle: set to opposite of system
      updateTheme(systemColorScheme === "dark" ? "light" : "dark");
    } else {
      // Subsequent toggles: switch between light and dark
      updateTheme(colorScheme === "dark" ? "light" : "dark");
    }
  }, [isSystemTheme, systemColorScheme, colorScheme, updateTheme]);

  const value = useMemo(
    () => ({ colorScheme, toggleTheme, isSystemTheme }),
    [colorScheme, isSystemTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
