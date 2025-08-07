import { StyleSheet, TextInput } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

function InputBox() {
  const isFocused = useSharedValue(false);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isFocused.value ? "transparent" : "#00000012",
        { duration: 400 }
      ),
    };
  });

  return (
    <AnimatedTextInput
      onFocus={() => (isFocused.value = true)}
      onBlur={() => (isFocused.value = false)}
      placeholder="Message..."
      style={[styles.input, animatedStyles]}
      placeholderTextColor="#858585"
      selectionColor={"#171717"}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 16,
    height: 36,
    paddingLeft: 12,

    fontFamily: "Inter-Variable",
    fontWeight: 400,
    fontSize: 16,
    color: "#171717",

    borderWidth: 1,
    borderColor: "#00000012",
  },
});

export default InputBox;
