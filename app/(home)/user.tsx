import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAuthStore } from "@/services/store/useAuthStore";
// import ScreenWrapper from "@/components/ScreenWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Typo from "@/components/Typo";
import { User } from "lucide-react-native";
import { router } from "expo-router";

const Home = () => {
  const { user } = useAuthStore();

  const getAccess = async () => {
    try {
      const val = await AsyncStorage.getItem("access_token");
      console.log("val", val);
    } catch (err) {}
  };

  console.log(getAccess());

  return (
    <SafeAreaView className="flex-1 bg-primary" edges={["top"]}>
      <View className="flex-1">
        <View className="bg-primary h-[20%] flex flex-col justify-around w-full px-5">
          <View className="flex flex-row items-center w-full gap-3">
            <TouchableOpacity onPress={()=>router.push('/(home)/profile')}>
              <View className="rounded-full h-[40px] w-[40px] flex flex-row justify-center items-center">
                {/* <User color={"white"} /> */}
                <Image
                  resizeMode="cover"
                  className=" rounded-full h-[40px] w-[40px]"
                  source={require("@/assets/images/user.png")}
                />
              </View>
            </TouchableOpacity>
            {/* User greeting */}
            <View>
              <Typo size={20} fontWeight={"700"}>
                Salam, Eltun!
              </Typo>
              <Typo size={12}>Sizi yenidən görmək xoşdur :)</Typo>
            </View>
          </View>
          <View>
            <View className="flex flex-col gap-1">
              <Typo size={14}>Total balance to spend</Typo>
              <Typo size={30} fontWeight={'700'}>$5758.92</Typo>
            </View>
          </View>
        </View>

        <View className="bg-white flex-1 rounded-t-3xl"></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

{
  /* <Text className="text-[40px]">
          Hi, {user?.first_name} {user?.last_name}, ur finance management App
        </Text> */
}
