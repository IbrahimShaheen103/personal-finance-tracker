import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddExpense from "../screens/AddExpense/AddExpense.screen";
import ExpenseDetails from "../screens/ExpenseDetails/ExpenseDetails.screen";
import HomeScreen from "../screens/Home/Home.screen";

export type RootStackParamList = {
  Home: undefined;
  AddExpense: undefined;
  ExpenseDetails: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddExpense" component={AddExpense} />
      <Stack.Screen name="ExpenseDetails" component={ExpenseDetails} />
    </Stack.Navigator>
  );
}
