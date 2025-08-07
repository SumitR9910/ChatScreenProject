import { StyleSheet, View } from "react-native";
import Timing from "./Timing";

function MessageInfo({ time }) {
  return (
    <View style={styles.container}>
      <Timing time={time} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 2,
    alignSelf: "flex-end",
  },
});

export default MessageInfo;
