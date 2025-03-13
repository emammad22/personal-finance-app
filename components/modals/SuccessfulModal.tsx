import { Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { useSuccessModal } from "@/services/store/useSuccessModal";
import { useRouter } from "expo-router";

const SuccessfulModal = ({link} : {link : any}) => {

    const {isSuccess, setCloseSuccess} = useSuccessModal()
    const router = useRouter()

    const handleLook = ()=>{
        router.navigate(link)
        setCloseSuccess()
    }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSuccess}
      onRequestClose={() => {
        // setModalOpen();
        console.log('succesful modal open')
      }}>
      <TouchableWithoutFeedback onPress={setCloseSuccess}>
        <View className="flex-1 justify-center items-center">
          <View className="bg-white p-5 w-[300px] flex flex-col justify-center items-center rounded-[30px] h-[250px] gap-2">
            <Text className="text-[20px] mb-4 font-bold">Uğurla tamamlandı!</Text>
            <Image className="w-[100px] h-[100px]" source={require('@/assets/images/completed.svg')}/>
            <View className="flex flex-col w-full gap-3 items-center">
                <TouchableOpacity className="bg-[#AA60C8] w-40 h-10 rounded-[20px] flex items-center justify-center"><Text className="text-white">Yenisini yarat</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleLook}><Text>Transaksiyalara bax</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SuccessfulModal;
