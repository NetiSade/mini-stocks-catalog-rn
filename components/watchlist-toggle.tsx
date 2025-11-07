import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useWatchlist } from "@/contexts/WatchlistContext";

interface WatchlistToggleProps {
  ticker: string;
  onPress?: () => void;
}

export function WatchlistToggle({ ticker, onPress }: WatchlistToggleProps) {
  const { isInWatchlist, toggleWatchlist } = useWatchlist();
  const inWatchlist = isInWatchlist(ticker);

  const handlePress = () => {
    toggleWatchlist(ticker);
    onPress?.();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.button}
      activeOpacity={0.7}
    >
      <ThemedText style={styles.icon}>{inWatchlist ? "★" : "☆"}</ThemedText>
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
