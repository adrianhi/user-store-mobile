import { ScrollView } from "react-native";
import RegisterForm from "@components/Auth/Register";
import { SafeAreaView } from "react-native-safe-area-context";

export default function register() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <RegisterForm />
      </ScrollView>
    </SafeAreaView>
  );
}
