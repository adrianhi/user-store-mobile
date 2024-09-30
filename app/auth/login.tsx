import { ScrollView, Text, View } from "react-native";
import LoginForm from "@components/Auth/Login";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LoginForm />
      </ScrollView>
    </SafeAreaView>
  );
}
