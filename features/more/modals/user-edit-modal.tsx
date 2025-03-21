import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { useUserEdit } from "../store/useUserEdit";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/Input";
import { useCurrentUser } from "@/features/auth/queries/use-current-user";
import { useEditUser } from "../queries/use-edit-user";
import { useRouter } from "expo-router";

const UserEdit = () => {
  const { setEditOpen, isEditOpen, setEditClose } = useUserEdit();
  const CURRENT_USER = useCurrentUser().data;
  const userMutation = useEditUser();
  const router = useRouter();
  const form = useForm({ values: { first_name: CURRENT_USER?.first_name, last_name: CURRENT_USER?.last_name } });

  const handleUserMutation = () => {
    userMutation.mutate(form.getValues());
    router.replace('/(app)/(home)/user')
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isEditOpen}
      onRequestClose={() => {
        setEditOpen();
      }}>
      <TouchableWithoutFeedback onPress={setEditClose} accessible={false}>
        <View className="flex-1 justify-end bg-black/50 ">
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View className="bg-white h-[410px] rounded-t-[20px] ">
              <View className="bg-blue-500/60 p-3 flex justify-center items-center rounded-t-[20px]">
                <Text className="text-[18px] font-medium text-white/70">User Settings</Text>
              </View>
              <View className="p-5">
                <View className="flex flex-col gap-5">
                  <View className="flex flex-col gap-3">
                    <Text className="text-[16px] font-medium">First Name :</Text>
                    <Controller
                      control={form.control}
                      name="first_name"
                      render={({ field }) => {
                        return <Input containerClass="h-[40px] py-2" className="text-black" {...field} />;
                      }}
                    />
                  </View>
                  <View className="flex flex-col gap-3">
                    <Text className="text-[16px] font-medium">Last Name :</Text>
                    <Controller
                      control={form.control}
                      name="last_name"
                      render={({ field }) => {
                        return <Input containerClass="h-[40px] py-2" className="text-black" {...field} />;
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleUserMutation}
                  className="flex justify-center items-center bg-blue-500/60 mt-[20px] p-3 rounded-[20px]">
                  <Text className="text-white text-[18px]">Edit User</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default UserEdit;
