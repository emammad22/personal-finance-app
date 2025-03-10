import { TextInput, View } from "react-native";
import React from "react";
import { InputProps } from "@/types";
import { cn } from "@/utils/cn";
import { colors } from "@/constants/theme";

const Input = (props: InputProps) => {
  return (
    <View className="flex flex-row items-center justify-center h-14 border border-neutral300 rounded-2xl px-4 gap-4">
      {props.icon && props.icon}
      <TextInput
        value={props.value}
        onChangeText={props.onChange}
        placeholderTextColor={colors.neutral400}
        className={cn(`color-white text-[14px] flex-1`, props.className)}
        {...props}
      />
    </View>
  );
};

export default Input;
