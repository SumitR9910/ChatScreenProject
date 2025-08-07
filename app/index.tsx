import ActionBar from "../components/ActionBar/ActionBar";

import { FlatList, Text } from "react-native";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";

function Index() {
  const data = Array.from({ length: 100 }, (_, i) => i + 1);

  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));

  return (
    <>
      <Animated.View style={[{ flex: 1 }, animatedStyles]}>
        <FlatList data={data} renderItem={({ item }) => <Text>{item}</Text>} />
      </Animated.View>
      <ActionBar />
    </>
  );
}

export default Index;
