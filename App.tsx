import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import "react-native-reanimated";

import { Colors } from "@/constants/theme";
import { useTheme } from "@/contexts/ThemeContext";
import { useThemeColors } from "@/hooks/use-theme-colors";
import HomeScreen from "@/screens/HomeScreen";
import StockDetailScreen from "@/screens/StockDetailScreen";
import { RootStackParamList } from "@/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const CustomLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.light.background,
    card: Colors.light.background,
    text: Colors.light.text,
    primary: Colors.light.tint,
  },
};

const CustomDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Colors.dark.background,
    card: Colors.dark.background,
    text: Colors.dark.text,
    primary: Colors.dark.tint,
  },
};

export default function App() {
  const { colorScheme } = useTheme();
  const colors = useThemeColors();

  const theme = useMemo(
    () => (colorScheme === "dark" ? CustomDarkTheme : CustomLightTheme),
    [colorScheme]
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: colors.background,
            },
            animation: "fade",
            headerStyle: {
              backgroundColor: colors.background,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StockDetail"
            component={StockDetailScreen}
            options={({ route }) => ({
              title: route.params.stock.ticker,
              headerStyle: {
                backgroundColor: colors.background,
              },
            })}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
