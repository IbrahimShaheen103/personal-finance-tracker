import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from "react-native";
import { useExpenses } from "../../api/expenses.queries";
import EmptyState from "../../components/EmptyState/EmptyState";
import Header from "../../components/Header/Header";
import OfflineBanner from "../../components/OfflineBanner/OfflineBanner";
import ExpenseSkeleton from "../../components/Skeletons/ExpenseSkeleton";
import useNetworkStatus from "../../hooks/useNetworkStatus";
import useTheme from "../../hooks/useTheme";
import { RootStackParamList } from "../../navigation/RootNavigator";
import styles from "./Home.styles";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { data, isLoading, isFetching, refetch, error } = useExpenses();
  const isConnected = useNetworkStatus();
  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        {Array.from({ length: 6 }).map((_, index) => (
          <ExpenseSkeleton key={index} />
        ))}
      </View>
    );
  }

  //  Error + no cached data
  if (error && !data) {
    return (
      <View style={styles.container}>
        <Text>Something went wrong.</Text>
        <Text>Pull to retry.</Text>
      </View>
    );
  }
  // Empty state (no expenses)
  if (data && data.length === 0) {
    return (
      <View style={{ flex: 1 }}>
        {!isConnected && <OfflineBanner />}

        <EmptyState
          title="No expenses yet"
          description={
            isConnected
              ? "Start adding your expenses to see them here."
              : "You are offline. Connect to the internet and try again."
          }
        />

        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate("AddExpense")}
        >
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="My Expenses" />
      {!isConnected && <OfflineBanner />}
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, { backgroundColor: colors.surface }]}
            onPress={() =>
              navigation.navigate("ExpenseDetails", { id: item.id })
            }
          >
            <View>
              <Text style={[styles.title, { color: colors.textPrimary }]}>
                {item.title}
              </Text>
              <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                {item.category}
              </Text>
            </View>
            <Text style={styles.amount}>${item.amount}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
