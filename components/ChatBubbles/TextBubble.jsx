import Avatar from "./Avatar";
import MessageMeta from "./MessageMeta/MessageMeta";

import { StyleSheet, Text, View } from "react-native";

function TextBubble({ message, received, time }) {
  return (
    <View
      style={[
        styles.container,
        received ? styles.container.received : styles.container.sent,
      ]}
    >
      <View
        style={[
          styles.bubble,
          received
            ? { borderBottomLeftRadius: 0 }
            : { borderBottomRightRadius: 0 },
        ]}
      >
        <Text style={styles.text.message}>{message}</Text>

        <MessageMeta time={time} />
      </View>

      <Avatar
        uri={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXL0ELYhzoww8syHt3qx87yK1GgVaOm8FqAZ6vwE406cGm7bX8Okr5ztheid3HDfRUxYs&usqp=CAU"
        }
      />
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

    backgroundColor: "#F3F3F3",

    maxWidth: "85%",
  },
  text: {
    message: {
      fontFamily: "Inter-Regular",
      fontSize: 16,
      letterSpacing: 0.16,
      lineHeight: 22.4,
      color: "#171717",
    },
  },
});

export default TextBubble;
