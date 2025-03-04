import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { TouchableOpacity, View } from "react-native";
import { colors } from "@/constants/theme";
import Button from "@/components/Button";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View className={`flex-1 justify-between pt-[7px]`}>
        {/* header */}
        <View>
          <TouchableOpacity className="self-end mr-7" onPress={() => router.push("/(auth)/sign-in")}>
            <Typo fontWeight={"500"}>Sign In</Typo>
          </TouchableOpacity>
          <Animated.Image
            entering={FadeIn.duration(1000)}
            className={`w-full self-center h-[300px] mt-[100px]`}
            source={require("@/assets/images/welcome.png")}
          />
        </View>
        {/* footer */}
        <View className="bg-neutral900 items-center gap-[20px] shadow-[0px_-10px_25px_rgba(255,255,255,0.15)] pt-[30px] pb-[45px]">
          <Animated.View entering={FadeInDown.duration(1000).springify().damping(12)} className="items-center">
            <Typo size={30} fontWeight={"800"}>
              Always take control
            </Typo>
            <Typo size={30} fontWeight={"800"}>
              of your finances
            </Typo>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(100).springify().damping(12)}
            className="items-center gap-[2px]">
            <Typo size={17} color={colors.textLight}>
              Finances must be arranged to set a better
            </Typo>
            <Typo size={17} color={colors.textLight}>
              lifestyle in future
            </Typo>
          </Animated.View>
          <Animated.View
            className="w-full px-6"
            entering={FadeInDown.duration(1000).delay(200).springify().damping(12)}>
            <Button onPress={() => router.push("/(auth)/sign-up")}>
              <Typo size={22} color={colors.neutral900} fontWeight={"600"}>
                Get Started
              </Typo>
            </Button>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
