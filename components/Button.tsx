import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CustomButtonProps } from "@/types";
import Loading from "./Loading";

const Button = ({ style, onPress, loading = false, children, classname }: CustomButtonProps) => {
  if (loading) {
    return (
      <View style={[style]} className="bg-transparent rounded-xl h-[52px] justify-center items-center">
        <Loading color={"#D69ADE"} />
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      className={"bg-[#AA60C8] rounded-xl h-[52px] justify-center items-center"}
      style={[style]}>
      <Text className={classname}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
