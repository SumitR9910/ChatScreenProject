import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function CustomHeader() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[{ paddingTop: top }, styles.container]}>
      <View style={styles.icons}>
        <Image
          style={styles.icons.icon}
          source={require("../assets/icons/chevron-left.svg")}
          tintColor="#858585"
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
          tintColor="#858585"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#0000000C",

    height: 104,
    justifyContent: "space-between",

    paddingHorizontal: 16,
    paddingVertical: 13,

    flexDirection: "row",
    alignItems: "center",
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
      fontFamily: "Inter",
      fontWeight: 500,
      color: "#000000",
      letterSpacing: 0.34,
    },
  },
});

export default CustomHeader;
