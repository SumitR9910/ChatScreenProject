import { Stack } from "expo-router";
import CustomHeader from "../components/CustomHeader";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        options={{ headerShown: true, header: CustomHeader }}
        name="index"
      />
    </Stack>
  );
}
