import ActionBar from "../components/ActionBar/ActionBar";
import Header from "../components/Header";

import { FlatList, View } from "react-native";
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
      <Header />
      <Animated.View style={[{ flex: 1 }, animatedStyles]}>
        <FlatList
          keyboardDismissMode="on-drag"
          data={data}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
          )}
        />
      </Animated.View>
      <ActionBar />
    </>
  );
}

export default Index;
