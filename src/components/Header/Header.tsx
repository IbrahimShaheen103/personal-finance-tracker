import { StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../hooks/useTheme";
import { useThemeStore } from "../../store/theme.store";

type Props = {
  title: string;
  showThemeSwitcher?: boolean;
};

export default function Header({ title, showThemeSwitcher = false }: Props) {
  const { colors, mode } = useTheme();
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: colors.primary }}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {showThemeSwitcher && (
          <Switch value={mode === "dark"} onValueChange={toggleTheme} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
});
