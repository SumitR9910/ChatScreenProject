import { StyleSheet, Text, View } from "react-native";

import { BlurView } from "expo-blur";

import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Header() {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView
      intensity={50}
      style={[{ paddingTop: top, height: 50 + top }, styles.container]}
    >
      <View style={styles.icons}>
        <Image
          style={styles.icons.icon}
          source={require("../assets/icons/chevron-left.svg")}
        />
      </View>

      <View style={styles.user}>
        <View style={styles.profileImage}>
          <Image
            style={styles.profileImage.image}
            source={require("../assets/images/profile-image.png")}
          />
        </View>
        <Text style={styles.text.user}>Jacob Jones</Text>
      </View>

      <View style={styles.icons}>
        <Image
          style={styles.icons.icon}
          source={require("../assets/icons/overflow.svg")}
        />
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#0000000C",

    justifyContent: "space-between",

    paddingHorizontal: 16,
    paddingVertical: 13,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF97",

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  icons: {
    width: 24,
    height: 24,

    icon: {
      width: "100%",
      height: "100%",
    },
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 100,

    backgroundColor: "#FACB3C",

    overflow: "hidden",

    image: { width: "100%", height: "100%" },
  },

  text: {
    user: {
      fontSize: 17,
      fontFamily: "Inter-Variable",
      fontWeight: 500,
      color: "#000000",
      letterSpacing: 0.34,
    },
  },
});

export default Header;
