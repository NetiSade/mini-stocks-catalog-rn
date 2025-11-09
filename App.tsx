import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { useTheme } from "@/contexts/ThemeContext";
import {
  NavigationDarkTheme,
  NavigationLightTheme,
} from "@/navigation/navigationThemes";
import {
  getDefaultScreenOptions,
  getStockDetailOptions,
  homeScreenOptions,
} from "@/navigation/screenOptions";
import { RootStackParamList } from "@/navigation/types";
import HomeScreen from "@/screens/HomeScreen";
import StockDetailScreen from "@/screens/StockDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { colorScheme, colors } = useTheme();

  const navigationTheme = useMemo(
    () => (colorScheme === "dark" ? NavigationDarkTheme : NavigationLightTheme),
    [colorScheme]
  );

  const screenOptions = useMemo(
    () => getDefaultScreenOptions(colors.background),
    [colors.background]
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={homeScreenOptions}
          />
          <Stack.Screen
            name="StockDetail"
            component={StockDetailScreen}
            options={({ route }) =>
              getStockDetailOptions(route.params.stock.ticker)
            }
          />
        </Stack.Navigator>
        {/* the color of the status bar text should be the opposite of the color scheme for readability */}
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
