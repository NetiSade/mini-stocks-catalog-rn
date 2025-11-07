import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SearchBar } from "@/components/search-bar";
import { StockItem } from "@/components/stock-item";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useWatchlist } from "@/contexts/WatchlistContext";
import { STOCKS_MOCK_DATA, Stock } from "@/data/stocks";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { watchlistCount } = useWatchlist();
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStocks = useMemo(() => {
    if (!searchQuery.trim()) {
      return STOCKS_MOCK_DATA;
    }

    const query = searchQuery.toLowerCase();
    return STOCKS_MOCK_DATA.filter(
      (stock) =>
        stock.ticker.toLowerCase().includes(query) ||
        stock.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const contentContainerStyle = [
    styles.listContent,
    { paddingBottom: insets.bottom + 20 },
  ];

  const handleStockPress = (stock: Stock) => {
    navigation.navigate("StockDetail", { stock });
  };

  const renderStockItem = ({ item }: { item: Stock }) => (
    <StockItem stock={item} onPress={handleStockPress} />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  const keyExtractor = (item: Stock) => item.ticker;

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <View>
          <ThemedText type="title">Stocks</ThemedText>
          <ThemedText style={styles.watchlistCount}>
            Watchlist: {watchlistCount}
          </ThemedText>
        </View>
        <ThemeToggle />
      </View>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search stocks..."
      />
      <FlatList
        data={filteredStocks}
        renderItem={renderStockItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={contentContainerStyle}
        ItemSeparatorComponent={renderSeparator}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  watchlistCount: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: 4,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  separator: {
    height: 12,
  },
});
