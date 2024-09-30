import { useState } from "react";
import { Link } from "expo-router";
import { Text, TextInput, View, Button, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { registerUser } from "@services/auth"; // Asegúrate de ajustar la ruta si es necesario
import Toast from "react-native-root-toast";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    try {
      const userData = { name, email, password };
      const response = await registerUser(userData);
      console.log("Usuario registrado:", response);
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
      <Text className="text-2xl font-bold mb-6">Register Now!!</Text>
      <View className="w-full max-w-md">
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          className="border-b border-gray-300 mb-4 py-2 px-3"
        />
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
        <Button title="Register" onPress={handleRegister} />
        <Link href="/auth/login" className="text-center text-base mt-4">
          Already have an account?{" "}
          <Text className="text-blue-500 underline">Login</Text>
        </Link>
      </View>
    </View>
  );
};

export default RegisterForm;
