import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { WatchlistToggle } from "@/components/watchlist-toggle";
import { useTheme } from "@/contexts/ThemeContext";
import { Stock } from "@/data/stocks";
import { formatPrice } from "@/utils/format";

interface StockItemProps {
  stock: Stock;
  onPress: (stock: Stock) => void;
}

export function StockItem({ stock, onPress }: StockItemProps) {
  const { colors } = useTheme();

  const handlePress = () => {
    onPress(stock);
  };

  const logoContainerStyle = [
    styles.logoContainer,
    { backgroundColor: colors.logoBackground },
  ];

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.cardBackground }]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={logoContainerStyle}>
        <Image
          source={{ uri: stock.logoUrl }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.stockInfo}>
        <ThemedText type="defaultSemiBold" style={styles.ticker}>
          {stock.ticker}
        </ThemedText>
        <ThemedText style={styles.description} numberOfLines={1}>
          {stock.description}
        </ThemedText>
      </View>
      <View style={styles.priceContainer}>
        <ThemedText type="defaultSemiBold" style={styles.price}>
          {formatPrice(stock.price)}
        </ThemedText>
        {/* catch the touch event and stop it from propagating to the parent for the watchlist toggle*/}
        <View
          onStartShouldSetResponder={() => true}
          onTouchEnd={(e) => e.stopPropagation()}
        >
          <WatchlistToggle ticker={stock.ticker} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  logoContainer: {
    width: 64,
    height: 64,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  logo: {
    width: 48,
    height: 48,
  },
  stockInfo: {
    flex: 1,
    justifyContent: "center",
  },
  ticker: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    opacity: 0.7,
  },
  priceContainer: {
    alignItems: "flex-end",
    marginLeft: 12,
  },
  price: {
    fontSize: 16,
    marginBottom: 4,
  },
});
