import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { usePaymentModal } from "@/services/store/usePaymentModal";
import { CameraIcon, ScanBarcode, TextCursorInputIcon } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useCameraPermissions } from "expo-camera";
import { useScanner } from "@/features/payment/store/useScanner";

const ScanModal = () => {
  const { isModalOpen, setModalOpen } = usePaymentModal();
  const {setCameraActive} = useScanner();
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted: boolean | undefined = permission?.granted;

  const addTransaction = () => {
    router.push("/(app)/addTransaction");
    setModalOpen();
  };

  const handleQrScanner = async () => {
    requestPermission();
    if (isPermissionGranted) {
      router.navigate("/(app)/scanner");
      setCameraActive()
      setModalOpen();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={() => {
        setModalOpen();
      }}>
      <TouchableWithoutFeedback onPress={setModalOpen}>
        <View className="flex-1 justify-end bg-black/60">
          <View className="bg-white p-5 rounded-t-[30px] min-h-[210px]">
            <Text className="text-[20px] mb-4 font-bold">Ödəniş üsulunu seçin</Text>
            <View className="flex flex-row justify-between gap-3">
              <TouchableOpacity onPress={handleQrScanner}>
                <View className="flex flex-col items-center rounded-[20px] bg-[#307BF6]/80 h-[110px] w-[110px]">
                  <View className="flex justify-center items-center p-2">
                    <ScanBarcode size={50} color={"white"} />
                  </View>
                  <Text className="text-white">QR scan edin</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="flex flex-col items-center rounded-[20px] bg-[#307BF6]/80 h-[110px] w-[110px]">
                  <View className="flex justify-center items-center p-2">
                    <CameraIcon size={50} color={"white"} />
                  </View>
                  <Text className="text-white">Şəkil çək</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={addTransaction}>
                <View className="flex flex-col items-center rounded-[20px] bg-[#307BF6]/80 h-[110px] w-[110px]">
                  <View className="flex justify-center items-center p-2">
                    <TextCursorInputIcon size={50} color={"white"} />
                  </View>
                  <Text className="text-center text-white">Transaction əlavə et</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ScanModal;
