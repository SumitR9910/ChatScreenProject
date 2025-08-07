import Header from "../components/Header";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#FFFFFFEB",
        },
      }}
    >
      <Stack.Screen
        options={{ headerShown: true, header: Header }}
        name="index"
      />
    </Stack>
  );
}
