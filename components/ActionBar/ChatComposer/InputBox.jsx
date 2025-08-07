import { StyleSheet, TextInput } from "react-native";

function InputBox() {
  return (
    <TextInput
      placeholder="Message..."
      style={styles.input}
      placeholderTextColor="#858585"
      caret
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 16,
    height: 36,
    paddingLeft: 12,

    backgroundColor: "#00000012",

    fontFamily: "Inter-Variable",
    fontWeight: 400,
    fontSize: 16,
    color: "#171717",
  },
});

export default InputBox;
