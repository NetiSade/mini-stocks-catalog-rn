import React, { useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { toggleTheme, colorScheme } = useTheme();
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    toggleTheme();

    // Rotation animation
    Animated.sequence([
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.button}
      activeOpacity={0.7}
    >
      <Animated.View style={{ transform: [{ rotate }] }}>
        <ThemedText style={styles.icon}>
          {colorScheme === "dark" ? "☀️" : "🌙"}
        </ThemedText>
      </Animated.View>
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
