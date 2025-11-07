import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SearchBar } from "@/components/search-bar";
import { StockItem } from "@/components/stock-item";
import { ThemedView } from "@/components/themed-view";
import { STOCKS_MOCK_DATA, Stock } from "@/data/stocks";

export default function HomeScreen() {
  const navigation = useNavigation();
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
      <SearchBar
        containerStyle={styles.searchBar}
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
  searchBar: {
    paddingBottom: 0,
    marginVertical: 16,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  separator: {
    height: 12,
  },
});
