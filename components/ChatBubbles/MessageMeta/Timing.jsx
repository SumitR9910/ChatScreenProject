import { StyleSheet, Text, View } from "react-native";

function Timing({ time, received }) {
  return (
    <View>
      <Text
        style={[styles.text, { color: received ? "#FFFFFF97" : "#0000007A" }]}
      >
        {time}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    letterSpacing: 0.24,
  },
});

export default Timing;
