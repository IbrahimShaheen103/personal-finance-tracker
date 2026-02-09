import { StyleSheet } from "react-native";

export const createAddExpenseStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      padding: 16,
      paddingBottom: 32,
    },
    formGroup: {
      marginBottom: 20,
    },
    label: {
      fontSize: 14,
      fontWeight: "600",
      marginBottom: 8,
      color: colors.textPrimary,
    },
    input: {
      backgroundColor: colors.surface,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border || "#e0e0e0",
      paddingHorizontal: 12,
      paddingVertical: 12,
      fontSize: 16,
      color: colors.textPrimary,
    },
    textArea: {
      minHeight: 100,
      textAlignVertical: "top",
    },
    errorText: {
      color: "#ef4444",
      fontSize: 12,
      marginTop: 4,
    },
    categoriesContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    categoryButton: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: colors.surface,
      borderColor: "#c7d2e0",
    },
    categoryButtonActive: {
      backgroundColor: "#3b82f6",
      borderColor: "#3b82f6",
    },
    categoryButtonText: {
      fontSize: 14,
      color: colors.textPrimary,
    },
    categoryButtonTextActive: {
      color: "#ffffff",
      fontWeight: "600",
    },
    dateInputContainer: {
      flexDirection: "row",
      gap: 8,
    },
    dateInput: {
      flex: 1,
    },
    buttonContainer: {
      marginTop: 24,
      gap: 8,
    },
    submitButton: {
      backgroundColor: "#3b82f6",
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: "center",
    },
    submitButtonText: {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "600",
    },
    cancelButton: {
      backgroundColor: colors.surface,
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: "center",
    },
    cancelButtonText: {
      color: colors.textPrimary,
      fontSize: 16,
      fontWeight: "600",
    },
    loadingContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default createAddExpenseStyles;
