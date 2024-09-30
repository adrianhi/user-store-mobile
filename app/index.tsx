import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function index() {
  return <Redirect href="/welcome" />;
}
