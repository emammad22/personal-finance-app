import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useScanner } from "@/features/payment/store/useScanner";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";

const QRInfo = () => {
  const { setNotScanned } = useScanner();

  return (
    <SafeAreaView>
      <View className="p-5 bg-blue-400">
        <TouchableOpacity onPress={()=>{
          setNotScanned()
          router.back()
        }}>
          <ArrowLeft size={30} />
        </TouchableOpacity>
      </View>
      <Text>QRInfo</Text>
    </SafeAreaView>
  );
};

export default QRInfo;
