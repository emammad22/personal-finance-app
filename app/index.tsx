import { View } from "react-native";
import React, { useEffect } from "react";
import "@/global.css";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.navigate("/(auth)/welcome");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 bg-neutral900 justify-center items-center">
      <Animated.Image
        entering={FadeInDown.duration(1000).delay(200).springify().damping(12)}
        className="aspect-square h-[20%]"
        resizeMode="contain"
        source={require("@/assets/images/splashImage.png")}
      />
    </View>
  );
};

export default Home;
