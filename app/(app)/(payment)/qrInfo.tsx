import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useScanner } from "@/features/payment/store/useScanner";
import { Circle, CircleCheckBig } from "lucide-react-native";
import { router } from "expo-router";

const QRInfo = () => {
  const { setNotScanned, setCameraActive, qrResponse } = useScanner();

  return (
    <SafeAreaView className="flex-1 bg-[#eaeaea]">
      <View className="p-5 flex-1 flex-col gap-8">
        <View className="flex-1 flex-col justify-between">
          <View className="flex flex-col gap-7 justify-center items-center mt-11">
            <View className="bg-green p-8 rounded-full">
              <CircleCheckBig size={80} color={"#fff"} />
            </View>
            <View className="flex flex-col justify-center items-center">
              <Text className="text-[50px] font-semibold">Sucess</Text>
              <Text className="text-[16px] text-center">{qrResponse?.message}</Text>
              <View className="flex flex-row gap-3 items-center">
                <Text>Transaction status : {qrResponse?.status}</Text>{" "}
                <View className="animate-pulse">
                  <Circle color={"#f29339"} fill={"#f29339"} size={15} />
                </View>
              </View>
            </View>
          </View>
          <View className="self-center">
            <TouchableOpacity
              onPress={() => {
                setNotScanned();
                router.replace("/(app)/(home)/user");
                setCameraActive();
              }}
              className="p-5 rounded-[20px] bg-green">
              <Text className="text-[#fff] text-[20px]">DONE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QRInfo;
