import { Link } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";
import { loginUser } from "@services/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "react-native-root-toast";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      const response = await loginUser(userData);

      if (response.error) {
        Toast.show(response.error, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          backgroundColor: "red",
          textColor: "white",
        });
      } else if (response?.user && response?.token) {
        Toast.show(`Bienvenido, ${response.user.name}!`, {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          backgroundColor: "green",
          textColor: "white",
        });
      }
      
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      Toast.show("Error en el inicio de sesión. Inténtalo de nuevo.", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        backgroundColor: "red",
        textColor: "white",
      });
    }
  };

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold mb-6">Login</Text>
      <View className="w-full max-w-md">
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          className="border-b border-gray-300 mb-4 py-2 px-3"
        />

        <View className="relative">
          <TextInput
            secureTextEntry={!showPassword}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            className="border-b border-gray-300 mb-4 py-2 px-3 pr-10"
          />
          <TouchableOpacity
            onPress={toggleShowPassword}
            className="absolute right-0 bottom-4 mb-2 px-3"
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>

        <Button title="Log In" onPress={handleLogin} />

        <Link href="/auth/register" className="text-center text-base mt-4">
          Doesn't have an account?{" "}
          <Text className="text-blue-500 underline">Register</Text>
        </Link>
      </View>
    </View>
  );
};

export default LoginForm;
