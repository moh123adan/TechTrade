import { Stack } from "expo-router";

export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="slug"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
