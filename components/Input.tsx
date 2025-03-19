import { ScrollView, TextInput, View } from "react-native";
import React from "react";
import { InputProps } from "@/types";
import { cn } from "@/utils/cn";
import { colors } from "@/constants/theme";

const Input = (props: InputProps) => {
  return (
    <View
      className={cn(
        "flex flex-row items-center h-14 border border-neutral-300 rounded-2xl px-4 gap-4",
        props.containerClass,
      )}>
      {props.icon && props.icon}
      <ScrollView keyboardShouldPersistTaps="handled">
        <TextInput
          value={props.value}
          onChangeText={props.onChange}
          autoComplete="off"
          autoCapitalize="none"
          placeholderTextColor={colors.neutral400}
          className={cn("text-white text-[14px] w-full  p-2 rounded-md", props.className)}
          {...props}
        />
      </ScrollView>
    </View>
  );
};

export default Input;
