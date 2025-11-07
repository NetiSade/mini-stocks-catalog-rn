import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";

import {
  NavigationDarkTheme,
  NavigationLightTheme,
} from "@/constants/navigationThemes";
import { useTheme } from "@/contexts/ThemeContext";
import HomeScreen from "@/screens/HomeScreen";
import StockDetailScreen from "@/screens/StockDetailScreen";
import { RootStackParamList } from "@/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { colorScheme, colors } = useTheme();

  const navigationTheme = useMemo(
    () => (colorScheme === "dark" ? NavigationDarkTheme : NavigationLightTheme),
    [colorScheme]
  );

  const screenOptions = useMemo(
    () => ({
      contentStyle: { backgroundColor: colors.background },
      headerStyle: { backgroundColor: colors.background },
      animation: "fade" as const,
    }),
    [colors.background]
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StockDetail"
            component={StockDetailScreen}
            options={({ route }) => ({ title: route.params.stock.ticker })}
          />
        </Stack.Navigator>
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
