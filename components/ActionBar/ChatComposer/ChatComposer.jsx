import AttachMedia from "./AttachMedia";
import InputBox from "./InputBox";
import MicButton from "./MicButton";

import { StyleSheet, View } from "react-native";

function ChatComposer() {
  return (
    <View style={styles.container}>
      <AttachMedia />

      <InputBox />

      <MicButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    height: 40,

    paddingHorizontal: 4,
    marginTop: 8,
  },
});

export default ChatComposer;
