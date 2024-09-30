import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

const Start = () => {
  return (
    <View className="flex-1 justify-center items-center ">
      <Text className="text-4xl font-bold text-white mb-10 text-center">
        Welcome to the App
      </Text>

      <Link href="/auth/register" asChild>
        <Pressable
          className="px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg border-2 border-white active:bg-blue-450 active:scale-95 transition duration-200"
          style={{
            elevation: 5,
          }}
        >
          <Text className="text-white font-bold text-lg tracking-wider text-center">
            Go to Register
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Start;
