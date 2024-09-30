import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
export default function AuthLayout() {
  return (
    <RootSiblingParent>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#09D5E8" },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="register" options={{ title: "Register" }} />
      </Stack>
    </RootSiblingParent>
  );
}
