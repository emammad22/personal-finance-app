import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { CameraView } from "expo-camera";
import { router, useFocusEffect } from "expo-router";
import { useScanner } from "@/features/payment/store/useScanner";
import { ArrowLeft } from "lucide-react-native";

const Scanner = () => {
  const { width, height } = Dimensions.get("window");
  const { isScanned, setScanned, setCameraInactive, isCameraActive, setCameraActive } = useScanner();


  useFocusEffect(
    useCallback(()=>{
      setCameraActive();
      return ()=>{
        console.log('screen unfocused, stopping camera ...')
        setCameraInactive();
      }
    },[])
  )

  console.log("width, height", width, height);
  const SCAN_BOX_SIZE = 250;

  const handleQRScanned = ({ bounds, data }: { bounds: any; data: any }) => {
    if (isScanned || !bounds || !bounds.origin) return;
    const { x, y } = bounds.origin;
    const qrCenterX = x + bounds.size.width / 2;
    const qrCenterY = y + bounds.size.height / 2;

    const boxX = width / 2 - SCAN_BOX_SIZE / 2;
    const boxY = height / 2 - SCAN_BOX_SIZE / 2;

    if (qrCenterX > boxX && qrCenterX < boxX + SCAN_BOX_SIZE && qrCenterY > boxY && qrCenterY < boxY + SCAN_BOX_SIZE) {
      if (!isScanned) {
        setScanned();
        router.replace("/(app)/(payment)/qrInfo");
      }
    }
  };

  return (
    <SafeAreaView className="flex-1" style={StyleSheet.absoluteFillObject}>
      <CameraView
        active={isCameraActive}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={isScanned ? undefined : handleQRScanned}
      />
      <View className={`absolute w-[390px] h-[844px] items-center justify-center`}>
        <View className={`w-[390px] h-[297px] bg-black/50`}>
          <TouchableOpacity className="absolute top-[20%] left-[10%]" onPress={() => router.back()}>
            <ArrowLeft size={30} color={"white"} />
          </TouchableOpacity>
        </View>
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
