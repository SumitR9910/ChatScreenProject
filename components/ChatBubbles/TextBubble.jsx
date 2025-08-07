import Avatar from "./Avatar";
import MessageMeta from "./MessageMeta/MessageMeta";

import { StyleSheet, Text, View } from "react-native";

const COLOR = {
  user: {
    background: "#1B88D8",
    text: "#FFFFFF",
  },
  community: {
    background: "#5D47E2",
    text: "#FFFFFF",
  },
};

function TextBubble({ message, received, time, receivedSource, lastNode }) {
  const bubbleStyles = [
    {
      borderRadius: 16,
      backgroundColor: received ? COLOR[receivedSource]?.background : "#F3F3F3",
    },
    !lastNode && (received ? { marginLeft: 28 } : { marginRight: 28 }),
    lastNode &&
      (received
        ? { borderBottomLeftRadius: 0 }
        : { borderBottomRightRadius: 0 }),
  ];

  return (
    <View
      style={[
        styles.container,
        received ? styles.container.received : styles.container.sent,
      ]}
    >
      <View style={[styles.bubble, ...bubbleStyles, {}]}>
        <Text
          style={[
            styles.text.message,
            {
              color: received ? COLOR[receivedSource]?.text : "#171717",
            },
          ]}
        >
          {message}
        </Text>

        <MessageMeta time={time} received={received} />
      </View>

      {lastNode && (
        <Avatar
          uri={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXL0ELYhzoww8syHt3qx87yK1GgVaOm8FqAZ6vwE406cGm7bX8Okr5ztheid3HDfRUxYs&usqp=CAU"
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    alignItems: "flex-end",

    received: {
      alignSelf: "flex-start",
      flexDirection: "row-reverse",
    },
    sent: {
      alignSelf: "flex-end",
      flexDirection: "row",
    },
  },

  bubble: {
    borderRadius: 16,

    paddingVertical: 8,
    paddingHorizontal: 12,

    maxWidth: "80%",
  },
  text: {
    message: {
      fontFamily: "Inter-Regular",
      fontSize: 16,
      letterSpacing: 0.16,
      lineHeight: 22.4,
    },
  },
});

export default TextBubble;
