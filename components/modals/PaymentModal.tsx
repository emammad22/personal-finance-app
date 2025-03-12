import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { usePaymentModal } from "@/services/store/usePaymentModal";
import { CameraIcon, ScanBarcode, TextCursorInputIcon } from "lucide-react-native";
import { useRouter } from "expo-router";

const ScanModal = () => {
  const { isModalOpen, setModalOpen } = usePaymentModal();
  const router = useRouter();

  const addTransaction = () => {
    router.push("/(app)/addTransaction");
    setModalOpen();
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
        <View className="flex-1 justify-end bg-white/60">
          <View className="bg-white p-5 rounded-t-[30px] h-[230px]">
            <Text className="text-[20px] mb-4 font-bold">Ödəniş üsulunu seçin</Text>
            <View className="flex flex-row justify-between gap-3">
              <TouchableOpacity>
                <View className="flex flex-col items-center rounded-[20px] bg-primary/80 h-[110px] w-[110px]">
                  <View className="flex justify-center items-center p-2">
                    <ScanBarcode size={50} color={"#222"} />
                  </View>
                  <Text>QR scan edin</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="flex flex-col items-center rounded-[20px] bg-primary/80 h-[110px] w-[110px]">
                  <View className="flex justify-center items-center p-2">
                    <CameraIcon size={50} color={"#222"} />
                  </View>
                  <Text>Şəkil çək</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={addTransaction}>
                <View className="flex flex-col items-center rounded-[20px] bg-primary/80 h-[110px] w-[110px]">
                  <View className="flex justify-center items-center p-2">
                    <TextCursorInputIcon size={50} color={"#222"} />
                  </View>
                  <Text className="text-center">Transaction əlavə et</Text>
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
