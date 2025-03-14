import { Text, View } from "react-native";
import React from "react";
import { TransactionProps } from "@/features/home/types";
import { transactionIcons } from "@/constants/icon";

const RecentTransactionItem = ({ category, amount, transaction_type }: TransactionProps) => {
  return (
    <View className="bg-white rounded-[15px] flex flex-row  justify-between">
      <View className="flex flex-row gap-3">
        <View className="w-[52px] h-[52px] rounded-[12px] bg-[#B3C5F7] flex justify-center items-center">
          {transactionIcons[category.name as keyof typeof transactionIcons]}
        </View>
        <View className="flex flex-col gap-[5px]">
          <Text className="font-bold text-[18px]">{category.name}</Text>
          <Text className="text-[#26273A]/60 text-[12px] text-right">17 Sep 2025, 10:34 AM</Text>
        </View>
      </View>
      <View className="flex flex-col items-end gap-[5px]">
        <Text className="font-bold text-[18px] text-[#26273A]">${amount}</Text>
        <View className="w-[66px] h-5 bg-[#00FF94]/20 rounded-[4px] flex justify-center items-center">
          <Text className="text-[10px] text-[#5DC486]">{transaction_type}</Text>
        </View>
      </View>
    </View>
  );
};

export default RecentTransactionItem;
