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
      <View>{icon[routeName as TabNames] && icon[routeName as TabNames]({ color: isFocused ? "#AA60C8" : "#222" })}</View>
      <Text className={`${isFocused ? "text-[#AA60C8]" : "text-[#222]"} text-[12px]`}>{label}</Text>
    </Pressable>
  );
};

export default TabBarButton;
