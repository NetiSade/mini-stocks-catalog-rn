import { act, renderHook, waitFor } from "@testing-library/react-native";
import React from "react";

import {
  PreferencesProvider,
  usePreferences,
} from "@/contexts/PreferencesContext";

// Wrapper component that provides the context
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <PreferencesProvider>{children}</PreferencesProvider>
);

describe("PreferencesContext", () => {
  it("should start with default preferences (system theme)", () => {
    const { result } = renderHook(() => usePreferences(), { wrapper });

    expect(result.current.preferences.theme).toBeNull(); // System theme
  });

  it("should update theme preference", async () => {
    const { result } = renderHook(() => usePreferences(), { wrapper });

    act(() => {
      result.current.updateTheme("dark");
    });

    await waitFor(() => {
      expect(result.current.preferences.theme).toBe("dark");
    });
  });

  it("should toggle between light and dark", async () => {
    const { result } = renderHook(() => usePreferences(), { wrapper });

    // Set to dark
    act(() => {
      result.current.updateTheme("dark");
    });

    await waitFor(() => {
      expect(result.current.preferences.theme).toBe("dark");
    });

    // Set to light
    act(() => {
      result.current.updateTheme("light");
    });

    await waitFor(() => {
      expect(result.current.preferences.theme).toBe("light");
    });
  });

  it("should reset to system theme", async () => {
    const { result } = renderHook(() => usePreferences(), { wrapper });

    // Set a theme first
    act(() => {
      result.current.updateTheme("dark");
    });

    await waitFor(() => {
      expect(result.current.preferences.theme).toBe("dark");
    });

    // Reset to system
    act(() => {
      result.current.updateTheme(null);
    });

    await waitFor(() => {
      expect(result.current.preferences.theme).toBeNull();
    });
  });
});
