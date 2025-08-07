import Avatar from "./Avatar";

import { StyleSheet, Text, View } from "react-native";

function TextBubble({ message }) {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.text.message}>{message}</Text>
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
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  bubble: {
    borderRadius: 16,

    borderBottomRightRadius: 0,

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
