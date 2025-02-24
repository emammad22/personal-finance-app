import { Image, View } from "react-native";
import React, { useEffect } from "react";
import "@/global.css";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/(auth)/welcome");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 bg-neutral900 justify-center items-center">
      <Image
        className="aspect-square h-[20%]"
        resizeMode="contain"
        source={require("@/assets/images/splashImage.png")}
      />
    </View>
  );
};

export default Home;
