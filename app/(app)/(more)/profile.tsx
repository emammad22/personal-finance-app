import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#F6F8FA]">
      <View className="p-5 flex flex-col gap-6">
        <View className="flex flex-row justify-between items-center mb-14">
          <TouchableOpacity onPress={()=> router.back()}>
            <ArrowLeft size={30} />
          </TouchableOpacity>
          <Text className="text-[20px]">Profile</Text>
          <View />
        </View>
        <View className="bg-white p-5 rounded-[10px] h-[150px] flex flex-col justify-center items-center">
          <View className="w-[100px] h-[100px] rounded-full absolute top-[-35%] bg-[#eaeaea] p-5 flex justify-center items-center">
            <Image className="w-[60px] h-[60px]" source={require('@/assets/images/usernew.svg')}/>
          </View>
          <Text className="text-[20px] font-semibold">Eltun Məmmədov</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
