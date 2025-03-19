import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { useTransactionModal } from "@/services/store/useTransactionModal";
import { transactionIcons } from "@/constants/icon";
import { ETransaction } from "@/types";
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
          <View className="bg-white p-5 rounded-t-[30px] min-h-[410px]">
            <Text className="text-[20px] mb-4 font-bold">{transactionName} növünü seçin</Text>
            <View className="flex flex-row gap-3 flex-wrap">
              {transactionDatas?.map(({ name, value }, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleInput(value)}
                    key={index}
                    className="w-[110px] p-5 flex items-center justify-center rounded-[20px] h-[80px] bg-[#307BF6]/80 gap-2">
                    <View>{transactionIcons?.[name as keyof typeof transactionIcons]({size : 30})}</View>
                    <Text className="text-white text-center font-bold">{ETransaction[name as keyof typeof ETransaction]}</Text>
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
