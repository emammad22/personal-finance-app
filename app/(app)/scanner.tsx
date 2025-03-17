import { Alert, Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useCallback, useState } from "react";
import { CameraView } from "expo-camera";
import { useSuccessModal } from "@/services/store/useSuccessModal";
import SuccessfulModal from "@/components/modals/SuccessfulModal";
import { router, useFocusEffect } from "expo-router";

const Scanner = () => {
  const { width, height } = Dimensions.get("window");
  const { setSuccess, setCloseSuccess } = useSuccessModal();
  const [scanned, setScanned] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setIsCameraActive(true);
      return () => setIsCameraActive(false);
    }, []),
  );

  console.log("width, height", width, height);
  const SCAN_BOX_SIZE = 250;

  const handleQRScanned = ({ bounds, data }: { bounds: any; data: any }) => {
    if (scanned || !bounds || !bounds.origin) return;
    const { x, y } = bounds.origin;
    const qrCenterX = x + bounds.size.width / 2;
    const qrCenterY = y + bounds.size.height / 2;

    const boxX = width / 2 - SCAN_BOX_SIZE / 2;
    const boxY = height / 2 - SCAN_BOX_SIZE / 2;

    if (qrCenterX > boxX && qrCenterX < boxX + SCAN_BOX_SIZE && qrCenterY > boxY && qrCenterY < boxY + SCAN_BOX_SIZE) {
      if (!scanned) {
        setScanned(true);
        setSuccess();
      }
    }
  };

  const handleNewQR = () => {
    setCloseSuccess();
    setScanned(false);
    // router.navigate('/(app)/scanner')
  };

  const handleNavigate = () => {
    setCloseSuccess();
    setIsCameraActive(false);
    setScanned(false);
    router.navigate("/(app)/(home)/user");
  };

  return (
    <SafeAreaView className="flex-1" style={StyleSheet.absoluteFillObject}>
      <CameraView
        autofocus="on"
        active={isCameraActive}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleQRScanned}
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

      <SuccessfulModal mainFn={handleNewQR} secondaryFn={handleNavigate} main="Yenisini əlavə et" secondary="Bağla" />
    </SafeAreaView>
  );
};

export default Scanner;
