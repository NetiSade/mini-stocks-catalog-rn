import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { toggleTheme, colorScheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={styles.button}
      activeOpacity={0.7}
    >
      <ThemedText style={styles.icon}>
        {colorScheme === "dark" ? "☀️" : "🌙"}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    minWidth: 44,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    lineHeight: 28,
  },
});

