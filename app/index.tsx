import ActionBar from "../components/ActionBar/ActionBar";
import Header from "../components/Header";

import { Text, View } from "react-native";

import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";

const PADDING_FROM_EDGES = 20;

const ItemSeparatorComponent = () => <View style={{ height: 10 }} />;

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
        <FlashList
          maintainVisibleContentPosition={{
            startRenderingFromBottom: true,
          }}
          ItemSeparatorComponent={ItemSeparatorComponent}
          keyboardDismissMode="on-drag"
          data={data}
          contentContainerStyle={{
            paddingBottom: ACTION_BAR_HEIGHT,
            paddingTop: HEADER_HEIGHT,
          }}
          renderItem={({ _, index }) => (
            <View style={{ width: 100, height: 100, backgroundColor: "red" }}>
              <Text>{index}</Text>
            </View>
          )}
        />
      </Animated.View>
      <ActionBar />
    </>
  );
}

export default Index;
