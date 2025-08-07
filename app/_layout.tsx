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
      <Stack.Screen options={{ headerShown: false }} name="index" />
    </Stack>
  );
}
