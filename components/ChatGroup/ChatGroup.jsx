import TextBubbleGroup from "./TextBubbleGroup";

import { StyleSheet, View } from "react-native";

function ChatGroup({ data }) {
  return (
    <View style={styles.group}>
      {data?.map((item, index) => {
        const lastNode = index === data?.length - 1;

        if (item?.type === "text")
          return (
            <TextBubbleGroup
              key={index}
              lastNode={lastNode}
              item={item}
              index={index}
            />
          );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  group: { gap: 2 },
});

export default ChatGroup;
