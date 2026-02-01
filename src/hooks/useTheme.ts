import { useColorScheme } from "react-native";
import { useThemeStore } from "../store/theme.store";
import { darkColors, lightColors } from "../theme/colors";

export default function useTheme() {
  const systemScheme = useColorScheme();
  const mode = useThemeStore((s) => s.mode);

  const resolvedMode = mode === "system" ? systemScheme : mode;

  const colors = resolvedMode === "dark" ? darkColors : lightColors;

  return {
    mode: resolvedMode,
    selectedMode: mode,
    colors,
  };
}
