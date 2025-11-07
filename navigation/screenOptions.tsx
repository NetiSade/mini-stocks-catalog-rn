import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import React from "react";

import { HomeHeaderTitle } from "@/components/home-header-title";
import { ThemeToggle } from "@/components/theme-toggle";

export const getDefaultScreenOptions = (
  backgroundColor: string
): NativeStackNavigationOptions => ({
  contentStyle: { backgroundColor },
  headerStyle: { backgroundColor },
  animation: "fade" as const,
});

export const homeScreenOptions: NativeStackNavigationOptions = {
  headerTitle: () => <HomeHeaderTitle />,
  headerRight: () => <ThemeToggle />,
  headerTitleAlign: "center",
};

export const getStockDetailOptions = (
  ticker: string
): NativeStackNavigationOptions => ({
  title: ticker,
});
