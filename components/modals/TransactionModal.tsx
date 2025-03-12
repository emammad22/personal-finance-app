import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { useTransactionModal } from "@/services/store/useTransactionModal";
import { transactionIcons } from "@/constants/icon";
import { Transaction } from "@/types";
import { useFormContext } from "react-hook-form";

const TransactionModal = () => {
  const { isTransactionOpen, setTransactionOpen, transactionDatas, transactionName } = useTransactionModal();

  const form = useFormContext();

  const handleInput = (type: string) => {
    form.setValue(transactionName, type);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isTransactionOpen}
      onRequestClose={() => {
        setTransactionOpen();
      }}>
      <TouchableWithoutFeedback onPress={setTransactionOpen}>
        <View className="flex-1 justify-end">
          <View className="bg-white p-5 rounded-t-[30px] h-[330px]">
            <Text className="text-[20px] mb-4 font-bold">Ödəniş üsulunu seçin</Text>
            <View className="flex flex-row gap-3">
              {transactionDatas?.map((type, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleInput(type)}
                    key={index}
                    className="w-[110px] p-5 flex items-center justify-center rounded-[20px] h-[80px] bg-primary gap-2">
                    <View>{transactionIcons[type]}</View>{" "}
                    <Text className="text-white text-center">{Transaction[type]}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default TransactionModal;
