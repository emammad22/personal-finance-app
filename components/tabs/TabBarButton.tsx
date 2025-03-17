import { Pressable, Text, View } from "react-native";
import React from "react";
import { icon } from "@/constants/icon";

type TabNames = "user" | "history" | "modal" | "savedtransactions" | "profile";

const TabBarButton = ({
  onPress,
  onLongPress,
  routeName,
  color,
  isFocused,
  label,
}: {
  onPress: () => void;
  onLongPress: () => void;
  routeName: string;
  color: string;
  isFocused: boolean;
  label: string;
}) => {
  return (
    <Pressable className="flex flex-1 gap-2 items-center justify-center" onPress={onPress} onLongPress={onLongPress}>
      <View>{icon[routeName as TabNames] && icon[routeName as TabNames]({ color:  "#307BF6" , opacity : isFocused ? 1 : 0.6})}</View>
      <Text className={`${isFocused ? "text-[#307BF6]" : "text-[#307BF6]/40"} text-[12px]`}>{label}</Text>
    </Pressable>
  );
};

export default TabBarButton;
