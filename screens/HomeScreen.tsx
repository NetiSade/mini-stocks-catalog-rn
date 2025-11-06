import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { STOCKS_MOCK_DATA, Stock } from "@/data/stocks";
import { useThemeColors } from "@/hooks/use-theme-colors";
import { RootStackScreenProps } from "@/types/navigation";

export default function HomeScreen() {
  const navigation =
    useNavigation<RootStackScreenProps<"Home">["navigation"]>();
  const colors = useThemeColors();

  const handleStockPress = (stock: Stock) => {
    navigation.navigate("StockDetail", { stock });
  };

  const renderStockItem = ({ item }: { item: Stock }) => (
    <TouchableOpacity
      style={[styles.stockItem, { backgroundColor: colors.cardBackground }]}
      onPress={() => handleStockPress(item)}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.logoContainer,
          { backgroundColor: colors.logoBackground },
        ]}
      >
        <Image
          source={{ uri: item.logoUrl }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.stockInfo}>
        <ThemedText type="defaultSemiBold" style={styles.ticker}>
          {item.ticker}
        </ThemedText>
        <ThemedText style={styles.description} numberOfLines={1}>
          {item.description}
        </ThemedText>
      </View>
      <ThemedText type="defaultSemiBold" style={styles.price}>
        ${item.price.toFixed(2)}
      </ThemedText>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title">Stocks</ThemedText>
      </View>
      <FlatList
        data={STOCKS_MOCK_DATA}
        renderItem={renderStockItem}
        keyExtractor={(item) => item.ticker}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  stockItem: {
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
  price: {
    fontSize: 16,
    marginLeft: 12,
  },
  separator: {
    height: 12,
  },
});
