import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { useUserEdit } from "../store/useUserEdit";

const UserEdit = () => {
  const { setEditOpen, isEditOpen, setEditClose } = useUserEdit();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isEditOpen}
      onRequestClose={() => {
        setEditOpen();
      }}>
      <TouchableWithoutFeedback onPress={setEditClose} accessible={false}>
        <View className="flex-1 justify-end bg-black/60">
          <TouchableWithoutFeedback>
            <View className="p-5 bg-red-500 rounded-t-[20px] min-h-[210px]"></View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default UserEdit;
