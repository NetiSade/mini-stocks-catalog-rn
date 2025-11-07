import React, { useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useWatchlist } from "@/contexts/WatchlistContext";

interface WatchlistToggleProps {
  ticker: string;
  onPress?: () => void;
}

export function WatchlistToggle({ ticker, onPress }: WatchlistToggleProps) {
  const { isInWatchlist, toggleWatchlist } = useWatchlist();
  const inWatchlist = isInWatchlist(ticker);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    toggleWatchlist(ticker);
    onPress?.();

    // Scale animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.3,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.button}
      activeOpacity={0.7}
    >
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <ThemedText style={styles.icon}>{inWatchlist ? "★" : "☆"}</ThemedText>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
    minWidth: 45,
    minHeight: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    lineHeight: 28,
  },
});
