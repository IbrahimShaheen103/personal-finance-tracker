import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCreateExpense } from "../../api/expenses.queries";
import Header from "../../components/Header/Header";
import useTheme from "../../hooks/useTheme";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { formatDateForInput } from "../../utils/formatters";
import { validateExpenseForm } from "../../utils/validation";
import createAddExpenseStyles from "./AddExpense.styles";

type AddExpenseScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "AddExpense"
>;

const CATEGORIES = [
  "Food",
  "Transport",
  "Entertainment",
  "Utilities",
  "Health",
  "Shopping",
  "Other",
];

export default function AddExpense({ navigation }: AddExpenseScreenProps) {
  const { colors } = useTheme();
  const styles = createAddExpenseStyles(colors);
  const { mutate: createEx, isPending } = useCreateExpense();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [date, setDate] = useState(formatDateForInput(new Date()));
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async () => {
    const validationErrors = validateExpenseForm(
      title,
      amount,
      selectedCategory,
      date,
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    createEx(
      {
        title: title.trim(),
        amount: parseFloat(amount),
        category: selectedCategory,
        date,
      },
      {
        onSuccess: () => {
          Alert.alert("Success", "Expense added successfully");
          navigation.goBack();
        },
        onError: (error) => {
          Alert.alert("Error", "Failed to add expense. Please try again.");
          console.error(error);
        },
      },
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Add Expense" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Input */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Lunch at restaurant"
            placeholderTextColor={colors.textSecondary}
            value={title}
            onChangeText={(text) => {
              setTitle(text);
              if (errors.title) setErrors({ ...errors, title: "" });
            }}
            editable={!isPending}
          />
          {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
        </View>

        {/* Amount Input */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Amount ($)</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            placeholderTextColor={colors.textSecondary}
            value={amount}
            onChangeText={(text) => {
              setAmount(text);
              if (errors.amount) setErrors({ ...errors, amount: "" });
            }}
            keyboardType="decimal-pad"
            editable={!isPending}
          />
          {errors.amount && (
            <Text style={styles.errorText}>{errors.amount}</Text>
          )}
        </View>

        {/* Category Selection */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Category</Text>
          <View style={styles.categoriesContainer}>
            {CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive,
                ]}
                onPress={() => {
                  setSelectedCategory(category);
                  if (errors.category) setErrors({ ...errors, category: "" });
                }}
                disabled={isPending}
              >
                <Text
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === category &&
                      styles.categoryButtonTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {errors.category && (
            <Text style={styles.errorText}>{errors.category}</Text>
          )}
        </View>

        {/* Date Input */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={[styles.input, styles.dateInput]}
            placeholder="YYYY-MM-DD"
            placeholderTextColor={colors.textSecondary}
            value={date}
            onChangeText={(text) => {
              setDate(text);
              if (errors.date) setErrors({ ...errors, date: "" });
            }}
            editable={!isPending}
          />
          {errors.date && <Text style={styles.errorText}>{errors.date}</Text>}
        </View>

        {/* Submit and Cancel Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={isPending}
          >
            {isPending ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.submitButtonText}>Add Expense</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
            disabled={isPending}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
