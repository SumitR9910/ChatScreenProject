import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

function MicButton() {
  return (
    <View style={styles.icons}>
      <Image
        style={styles.icons.icon}
        source={require("../../../assets/icons/mic.svg")}
      />
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

export default MicButton;
