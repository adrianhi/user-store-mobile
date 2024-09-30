import { Link } from "expo-router";
import { Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function StackLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="welcome"
          options={{
            title: "Welcome",
            headerShown: false,
          }}
        />
        {/* Pantalla principal */}
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerShown: false, // Oculta la cabecera del Stack para "index"
          }}
        />

        {/* Grupo de pantallas auth */}
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
