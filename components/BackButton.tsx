import { TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { BackButtonProps } from "@/types";
import { cn } from "@/utils/cn";
import { ChevronLeft } from "lucide-react-native";

const BackButton = ({ iconSize = 26, className }: BackButtonProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className={cn(`flex flex-row items-center bg-neutral600 self-start rounded-xl p-2`, className)}
      onPress={() => router.back()}>
        <ChevronLeft size={iconSize}/>
      {/* <CaretLeft size={iconSize} color="white" weight="bold" /> */}
    </TouchableOpacity>
  );
};

export default BackButton;
