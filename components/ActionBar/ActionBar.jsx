import ChatComposer from "./ChatComposer/ChatComposer";

import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";

import { useSafeAreaInsets } from "react-native-safe-area-context";

function ActionBar() {
  const { bottom } = useSafeAreaInsets();

  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));

  return (
    <Animated.View
      style={[
        { paddingBottom: bottom, zIndex: -1 },
        animatedStyles,
        styles.container,
      ]}
    >
      <ChatComposer />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#0000000C",
    backgroundColor: "#FFFFFFEB",
  },
});

export default ActionBar;
