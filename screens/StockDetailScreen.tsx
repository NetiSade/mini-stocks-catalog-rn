import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { WatchlistToggle } from "@/components/watchlist-toggle";
import { useTheme } from "@/contexts/ThemeContext";
import { RootStackScreenProps } from "@/navigation/types";

export default function StockDetailScreen({
  route,
  navigation,
}: RootStackScreenProps<"StockDetail">) {
  const { stock } = route.params;
  const { colors } = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          <WatchlistToggle ticker={stock.ticker} />
        </View>
      ),
    });
  }, [navigation, stock.ticker]);

  const logoContainerStyle = [
    styles.logoContainer,
    { backgroundColor: colors.logoBackground },
  ];

  const descriptionCardStyle = [
    styles.descriptionCard,
    { backgroundColor: colors.cardBackground },
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={logoContainerStyle}>
          <Image
            source={{ uri: stock.logoUrl }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoSection}>
          <ThemedText type="title" style={styles.ticker}>
            {stock.ticker}
          </ThemedText>
          <ThemedText style={styles.price}>
            ${stock.price.toFixed(2)}
          </ThemedText>
        </View>

        <View style={descriptionCardStyle}>
          <ThemedText type="subtitle" style={styles.descriptionTitle}>
            About
          </ThemedText>
          <ThemedText style={styles.description}>
            {stock.description}
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  logoContainer: {
    width: 120,
    height: 120,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 24,
  },
  logo: {
    width: 100,
    height: 100,
  },
  infoSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  ticker: {
    fontSize: 32,
    lineHeight: 38,
    marginBottom: 8,
  },
  price: {
    fontSize: 28,
    lineHeight: 34,
    opacity: 0.8,
  },
  descriptionCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
  },
  descriptionTitle: {
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
  },
  headerRight: {
    marginRight: 8,
  },
});
