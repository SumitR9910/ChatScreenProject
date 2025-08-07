import Header from "../components/Header";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        options={{ headerShown: true, header: Header }}
        name="index"
      />
    </Stack>
  );
}
