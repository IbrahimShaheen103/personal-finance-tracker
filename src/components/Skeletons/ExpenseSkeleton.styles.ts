import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#E5E7EB",
  },
  left: {
    gap: 8,
  },
  title: {
    width: 120,
    height: 14,
    backgroundColor: "#D1D5DB",
    borderRadius: 6,
  },
  subtitle: {
    width: 80,
    height: 12,
    backgroundColor: "#D1D5DB",
    borderRadius: 6,
  },
  amount: {
    width: 60,
    height: 16,
    backgroundColor: "#D1D5DB",
    borderRadius: 6,
  },
});
