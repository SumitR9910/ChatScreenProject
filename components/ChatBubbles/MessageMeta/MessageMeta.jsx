import { StyleSheet, View } from "react-native";
import Timing from "./Timing";

function MessageInfo() {
  return (
    <View style={styles.container}>
      <Timing />
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
