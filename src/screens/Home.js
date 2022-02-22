import { Text, StyleSheet, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/counter/counter";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Template</Text>
      <Text style={styles.subtitle}>Current counter value: {count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          dispatch(increment());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 15,
  },
});
