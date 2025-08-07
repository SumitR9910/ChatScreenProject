import ActionBar from "../components/ActionBar/ActionBar";
import Header from "../components/Header";

import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";

const PADDING_FROM_EDGES = 20;

function Index() {
  const { top, bottom } = useSafeAreaInsets();

  const HEADER_HEIGHT = 50 + PADDING_FROM_EDGES + top;
  const ACTION_BAR_HEIGHT = 40 + PADDING_FROM_EDGES + bottom; // //not final;

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
          contentContainerStyle={{
            gap: 10,
            paddingBottom: ACTION_BAR_HEIGHT,
            paddingTop: HEADER_HEIGHT,
          }}
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
