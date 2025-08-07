import ActionBar from "../components/ActionBar/ActionBar";
import TextBubble from "../components/ChatBubbles/TextBubble";
import Header from "../components/Header";

import { dummyChatData } from "../data/dummyChatData";

import { View } from "react-native";

import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";

const PADDING_FROM_EDGES = 20;

const ItemSeparatorComponent = () => <View style={{ height: 28 }} />;
const renderItem = ({ item }) => {
  const commonProps = {
    message: item?.message,
    time: item?.time,
  };

  if (item?.received) {
    return (
      <TextBubble
        {...{ ...commonProps, receivedSource: item?.source, received: true }}
      />
    );
  }

  if (!item?.received) {
    return <TextBubble {...{ ...commonProps, received: false }} />;
  }
};
function Index() {
  const { top, bottom } = useSafeAreaInsets();

  const HEADER_HEIGHT = 50 + PADDING_FROM_EDGES + top;
  const ACTION_BAR_HEIGHT = 40 + PADDING_FROM_EDGES + bottom; // //not final;

  const keyboard = useAnimatedKeyboard();
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));

  return (
    <>
      <Header />
      <Animated.View style={[{ flex: 1 }, animatedStyles]}>
        <FlashList
          showsVerticalScrollIndicator={false}
          maintainVisibleContentPosition={{
            startRenderingFromBottom: true,
          }}
          ItemSeparatorComponent={ItemSeparatorComponent}
          keyboardDismissMode="on-drag"
          data={dummyChatData}
          contentContainerStyle={{
            paddingBottom: ACTION_BAR_HEIGHT,
            paddingTop: HEADER_HEIGHT,
            paddingHorizontal: 12,
          }}
          renderItem={renderItem}
        />
      </Animated.View>
      <ActionBar />
    </>
  );
}

export default Index;
