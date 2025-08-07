import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

function AttachMedia() {
  return (
    <View style={styles.container}>
      <IconContainer
        tintColor="#00000090"
        icon={require("../../../assets/icons/attach.svg")}
      />

      <IconContainer
        tintColor="#00000090"
        icon={require("../../../assets/icons/attach-image.svg")}
      />
    </View>
  );
}

function IconContainer({ tintColor, icon }) {
  return (
    <View style={styles.icons}>
      <Image style={styles.icons.icon} source={icon} tintColor={tintColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  icons: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    icon: { width: "60%", height: "60%" },
  },
});

export default AttachMedia;
