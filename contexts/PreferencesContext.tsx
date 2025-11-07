import { STORAGE_KEYS } from "@/constants/storageKeys";
import { StorageService } from "@/services/storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ColorScheme = "light" | "dark";

export interface UserPreferences {
  theme: ColorScheme | null; // null means use system default
}

type PreferencesContextType = {
  preferences: UserPreferences;
  updateTheme: (theme: ColorScheme | null) => void;
  isLoading: boolean;
};

const DEFAULT_PREFERENCES: UserPreferences = {
  theme: null,
};

const PreferencesContext = createContext<PreferencesContextType | undefined>(
  undefined
);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] =
    useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [isLoading, setIsLoading] = useState(true);

  // Load preferences on mount
  useEffect(() => {
    loadPreferences();
  }, []);

  // Save preferences whenever they change
  useEffect(() => {
    if (!isLoading) {
      savePreferences();
    }
  }, [preferences, isLoading]);

  const loadPreferences = async () => {
    const savedPreferences = await StorageService.getItem<UserPreferences>(
      STORAGE_KEYS.USER_PREFERENCES
    );
    if (savedPreferences) {
      setPreferences(savedPreferences);
    }
    setIsLoading(false);
  };

  const savePreferences = async () => {
    await StorageService.setItem(STORAGE_KEYS.USER_PREFERENCES, preferences);
  };

  const updateTheme = (theme: ColorScheme | null) => {
    setPreferences((prev) => ({ ...prev, theme }));
  };

  return (
    <PreferencesContext.Provider
      value={{ preferences, updateTheme, isLoading }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return context;
}
