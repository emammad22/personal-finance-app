import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { CameraView } from "expo-camera";

const Scanner = () => {
  const { width, height } = Dimensions.get("window");
  console.log("width, height", width, height);
  const SCAN_BOX_SIZE = 250;

  return (
    <SafeAreaView className="flex-1" style={StyleSheet.absoluteFillObject}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          console.log("data", data);
        }}
      />
      <View className={`absolute w-[390px] h-[844px] items-center justify-center`}>
        <View className={`w-[390px] h-[297px] bg-black/50`} />
        <View className="flex flex-row">
          <View className={`h-[250px] w-[70px] bg-black/50`} />
          <View className={`w-[250px] h-[250px] border-[3px] border-white bg-transparent rounded-[8px]`} />
          <View className={`h-[250px] w-[70px] bg-black/50`} />
        </View>
        <View className={`w-[390px] h-[297px] bg-black/50`} />
      </View>
    </SafeAreaView>
  );
};

export default Scanner;
