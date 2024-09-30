import { Text, View } from "react-native";
import { Screen } from "./Screen";
import { Link } from "expo-router";

export function Main() {
  return (
    <Screen>
      <View>
        <Link href="/" className="text-blue-600 text-3xl">
          aa
        </Link>
      </View>
    </Screen>
  );
}
