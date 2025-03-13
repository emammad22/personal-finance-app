import { Pressable, Text, View } from "react-native";
import React from "react";
import {ETransaction } from "@/types";

type SelectModalProps = {
    list : any[],
    name : string,
    handleSelect : (name : string, list : any[])=> void;
    value : string,
}


const SelectModal = ({handleSelect, list, name, value} : SelectModalProps) => {
  return (
    <Pressable
      onPress={() => handleSelect(name, list)}
      className="w-full flex justify-center h-14 border border-neutral300 rounded-2xl px-4">
      <View className="text-neutral400 flex flex-row items-center gap-2">
        <Text>{ETransaction[name as keyof typeof ETransaction]} :</Text>
        <View className="rounded-[20px]">
          <Text className="text-black text-[18px] font-semibold">{value}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SelectModal;
