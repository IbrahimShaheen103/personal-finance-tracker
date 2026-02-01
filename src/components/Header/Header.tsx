import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
};
const Header = ({
  title,
  backgroundColor = "#2563EB",
  textColor = "#fff",
}: Props) => {
  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.safeArea, { backgroundColor }]}
    >
      <View style={styles.container}>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#2563EB",
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
});
