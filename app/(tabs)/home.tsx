import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/about">Ab</Link>
    </View>
  );
}
