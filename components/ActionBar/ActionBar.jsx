import { BlurView } from "expo-blur";
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
      <BlurView intensity={50} style={styles.blurView} />
      <ChatComposer />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#0000000C",

    backgroundColor: "#FFFFFFEB",

    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  blurView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default ActionBar;
