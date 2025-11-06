import { Colors, ColorTheme } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export function useThemeColors(): ColorTheme {
  const colorScheme = useColorScheme() ?? "light";
  return Colors[colorScheme];
}
