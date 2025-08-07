import ChatComposer from "./ChatComposer/ChatComposer";

import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function ActionBar() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[{ paddingBottom: bottom }, styles.container]}>
      <ChatComposer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#0000000C",
  },
});

export default ActionBar;
