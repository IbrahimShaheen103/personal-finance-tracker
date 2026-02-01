import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 4,
    color: "#6B7280",
  },
  amount: {
    fontWeight: "700",
  },
});
