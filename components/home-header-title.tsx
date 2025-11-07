import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useTheme } from "@/contexts/ThemeContext";
import { useWatchlist } from "@/contexts/WatchlistContext";

export function HomeHeaderTitle() {
  const { watchlistCount } = useWatchlist();
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        My Stocks Catalog
      </Text>
      {watchlistCount > 0 && (
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Watchlist: {watchlistCount}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.6,
    textAlign: "center",
  },
});
