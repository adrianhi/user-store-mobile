import { SafeAreaView } from "react-native-safe-area-context";
import Start from "../components/Start/Start";
import { ScrollView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Welcome() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-sky-500"
      >
        <StatusBar style="auto" />
        <Start />
      </ScrollView>
    </SafeAreaView>
  );
}
