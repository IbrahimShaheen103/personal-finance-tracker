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
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabText: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "300",
  },
});
