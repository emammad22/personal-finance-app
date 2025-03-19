import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ArrowLeft, CalendarPlus, ChevronRight, LogOut, Mail, UserCog } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useCurrentUser } from "@/features/auth/queries/use-current-user";
import { useAuthStore } from "@/services/store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";

const Profile = () => {
  const router = useRouter();
  const CURRENT_USER = useCurrentUser().data;
  const query = useQueryClient();
  const { signOut } = useAuthStore();

  const JOINED_DATE = new Date(CURRENT_USER?.date_joined as string).toLocaleString();

  const handleSignOut = () => {
    query.clear();
    signOut();
  };
  console.log("Current", CURRENT_USER);

  return (
    <SafeAreaView className="flex-1 bg-[#F6F8FA]">
      <View className="p-5 flex flex-col gap-6">
        <View className="flex flex-row justify-between items-center mb-14">
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={30} />
          </TouchableOpacity>
          <Text className="text-[20px]">Profile</Text>
          <View />
        </View>
        <View className="bg-white p-5 rounded-[10px] h-[150px] flex flex-col justify-center items-center">
          <View className="w-[100px] h-[100px] rounded-full absolute top-[-35%] bg-[#eaeaea] p-5 flex justify-center items-center">
            <Image className="w-[60px] h-[60px]" source={require("@/assets/images/usernew.svg")} />
          </View>
          <Text className="text-[20px] font-semibold">{CURRENT_USER?.fullname}</Text>
        </View>
        {/* user info part */}
        <View className="bg-white p-5 rounded-[10px] flex flex-col gap-5">
          <TouchableOpacity>
            <View className="flex flex-row items-center gap-5">
              <Mail color={"#307BF6"} />
              <View className="flex flex-col gap-2">
                <Text className="font-medium text-[18px]">E-poçt ünvanım</Text>
                <Text className="text-[12px] text-[#000]/70">{CURRENT_USER?.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View className="flex flex-row gap-5">
            <CalendarPlus color={"#307BF6"} />
            <View className="flex flex-col gap-2">
              <Text className="text-[18px] font-medium">Qatılma tarixim</Text>
              <Text className="text-[12px] text-[#000]/70">{JOINED_DATE}</Text>
            </View>
          </View>
        </View>
        {/* Edit user info */}
        <TouchableOpacity>
          <View className=" bg-white p-5 rounded-[10px] flex flex-row gap-5 items-center">
            <UserCog />
            <Text className="text-[16px] font-medium text-[#000]/80">Şəxsi məlumatlarımı redaktə et</Text>
            <ChevronRight size={20}/>
          </View>
        </TouchableOpacity>
        {/* logout */}
        <TouchableOpacity onPress={handleSignOut}>
          <View className="bg-white p-5 rounded-[10px] flex flex-row gap-7 items-center">
            <LogOut color={"red"} size={30} />
            <Text className="text-red-500 font-semibold text-[18px]">Çıxış</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
