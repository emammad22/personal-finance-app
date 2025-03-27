import { Image, TouchableOpacity, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Typo from "@/components/Typo";
import { useRouter } from "expo-router";
import { Bell, LogOut } from "lucide-react-native";
import { useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "@/features/auth/queries/use-current-user";
import RecentTransactions from "@/components/transactions/recent-transactions";
import { useAuthStore } from "@/services/store/useAuthStore";

const Home = () => {
  const router = useRouter();
  const query = useQueryClient();
  const { signOut } = useAuthStore();
  const { data } = useCurrentUser();
  const handleSignOut = () => {
    query.clear();
    signOut();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#307BF6]" edges={["top"]}>
      <View className="flex-1">
        <View className="bg-[#307BF6] h-[20%] flex flex-col justify-around w-full px-5">
          <View className="flex flex-row w-full justify-between">
            <View className="flex flex-row items-center gap-3">
              {/* Profile Btn */}
              <TouchableOpacity onPress={() => router.push("/(app)/(home)/history")}>
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
                  Salam, {data?.fullname}!
                </Typo>
                <Typo size={12}>Sizi yenidən görmək xoşdur :)</Typo>
              </View>
            </View>
            <View className="flex flex-row self-center gap-3">
              <TouchableOpacity onPress={()=> router.navigate('/(app)/(payment)/qrInfo')}>
                <Bell color={"white"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSignOut}>
                <LogOut color={"white"} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View className="flex flex-col gap-1">
              <Typo size={14}>Total balance to spend</Typo>
              <Typo size={30} fontWeight={"700"}>
                ${data?.total_spent}
              </Typo>
            </View>
          </View>
        </View>
        <View className="bg-[#fff] flex-1 rounded-t-3xl p-5">
          <ScrollView>
            <RecentTransactions />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
