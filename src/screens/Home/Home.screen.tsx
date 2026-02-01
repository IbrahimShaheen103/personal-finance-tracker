import { FlatList, RefreshControl, Text, View } from "react-native";
import { useExpenses } from "../../api/expenses.queries";
import ExpenseSkeleton from "../../components/Skeletons/ExpenseSkeleton";
import styles from "./Home.styles";

export default function HomeScreen() {
  const { data, isLoading, isFetching, refetch, error } = useExpenses();
  if (isLoading) {
    return (
      <View style={styles.container}>
        {Array.from({ length: 6 }).map((_, index) => (
          <ExpenseSkeleton key={index} />
        ))}
      </View>
    );
  }

  // 2️⃣ Error + no cached data
  if (error && !data) {
    return (
      <View style={styles.container}>
        <Text>Something went wrong.</Text>
        <Text>Pull to retry.</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={refetch} />
      }
      renderItem={({ item }) => (
        <View style={styles.item}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.category}</Text>
          </View>
          <Text style={styles.amount}>${item.amount}</Text>
        </View>
      )}
    />
  );
}
