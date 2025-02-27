import { TouchableOpacity } from "react-native";
import React from "react";
import { CaretLeft } from "phosphor-react-native";
import { useRouter } from "expo-router";
import { BackButtonProps } from "@/types";
import { cn } from "@/utils/cn";

const BackButton = ({ iconSize = 26, className }: BackButtonProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className={cn(`flex flex-row items-center bg-neutral600 self-start rounded-xl p-2`, className)}
      onPress={() => router.back()}>
      <CaretLeft size={iconSize} color="white" weight="bold" />
    </TouchableOpacity>
  );
};

export default BackButton;
