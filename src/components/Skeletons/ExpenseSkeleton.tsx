import { View } from "react-native";
import styles from "./ExpenseSkeleton.styles";

const ExpenseSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.title} />
        <View style={styles.subtitle} />
      </View>
      <View style={styles.amount} />
    </View>
  );
};

export default ExpenseSkeleton;
