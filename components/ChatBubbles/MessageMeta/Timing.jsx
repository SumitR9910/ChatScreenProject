import { StyleSheet, Text, View } from "react-native";

function Timing({ time }) {
  return (
    <View>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    color: "#8F8F8F",
    letterSpacing: 0.24,
  },
});

export default Timing;
