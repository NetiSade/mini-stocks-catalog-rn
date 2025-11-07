import { Colors, ColorTheme } from "@/constants/theme";
import { useTheme } from "@/contexts/ThemeContext";

export function useThemeColors(): ColorTheme {
  const { colorScheme } = useTheme();
  return Colors[colorScheme];
}
