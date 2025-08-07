import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

function Avatar({ avatarTint, uri }) {
  return (
    <View style={[styles.avatar, { backgroundColor: avatarTint }]}>
      <Image
        contentFit="cover"
        contentPosition="top"
        style={styles.avatar.image}
        source={{ uri }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 100,
    overflow: "hidden",
    image: {
      width: "100%",
      height: "100%",
    },
  },
});

export default Avatar;
