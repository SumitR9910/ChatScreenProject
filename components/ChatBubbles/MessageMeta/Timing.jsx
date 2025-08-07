import { StyleSheet, Text, View } from "react-native";

function Timing() {
  return (
    <View>
      <Text style={styles.text}>11:59 AM</Text>
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
