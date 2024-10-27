import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text style={styles.container}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
