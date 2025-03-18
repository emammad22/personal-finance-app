import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ChevronRight, Star } from "lucide-react-native";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F6F8FA]">
      <StatusBar barStyle={"dark-content"} />
      {/* container for more page */}
      <View className="flex flex-col flex-1 gap-5 p-5">
        {/* title for more page */}
        <View>
          <Text className="text-[35px] font-bold">Daha çox</Text>
        </View>
        {/* user profile nav */}
        <View className="bg-white p-5 rounded-[10px] flex flex-row items-center justify-between">
          <View className="bg-[#eaeaea] rounded-full p-2">
            <Image className="w-[40px] h-[40px]" source={require("@/assets/images/usernew.svg")} />
          </View>
          <View className="flex flex-col gap-1">
            <Text className="text-[20px]">Eltun Məmmədov</Text>
            <Text className="text-[16px]">QR və şəxsi məlumatlarım</Text>
          </View>
          <TouchableOpacity>
            <ChevronRight size={25} color={"#eaeaea"} />
          </TouchableOpacity>
        </View>
        {/* Products and transactions */}
        <View className="bg-white p-5 rounded-[10px] gap-6 flex flex-col">
          <Text className="font-semibold text-[16px]">Məhsullar və əməliyyatlar</Text>
          {/* saved-transactions */}
          <TouchableOpacity>
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row  gap-4 items-center">
                <View>
                  <Star size={30} />
                </View>
                <View className="flex flex-col gap-2">
                  <Text className="text-[16px] font-semibold">Saved Transactions</Text>
                  <Text className="text-[13px]">Yadda saxlanılmış əsas {`\n`} tranzaksiyalar</Text>
                </View>
              </View>
              <View>
                <ChevronRight size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
