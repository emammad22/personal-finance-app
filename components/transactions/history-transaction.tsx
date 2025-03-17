import { Text, View } from "react-native";
import React from "react";
import { TransactionProps } from "@/features/home/types";
import { ETransaction } from "@/types";
import { transactionIcons } from "@/constants/icon";

const Transaction = ({ category, payment_type, amount, transaction_unique_id, transaction_type }: TransactionProps) => {
  return (
    <View className="border bg-white rounded-[15px] p-4 border-[#E0E8F2]/60 flex flex-row w-full  justify-between">
      <View className="flex flex-row gap-3">
        <View className="w-[52px] h-[52px] rounded-[12px] bg-[#B3C5F7] flex justify-center items-center">
          {transactionIcons[category.name as keyof typeof transactionIcons]({size : 30})}
        </View>
        <View className="flex flex-col gap-[5px]">
          <Text className="font-bold text-[18px]">{category.name}</Text>
          <Text className="font-extralight text-[16px]">{ETransaction[payment_type as keyof typeof ETransaction]}</Text>
          <View>
            <Text className="text-[12px] text-[#26273A]/60">Transaction ID</Text>
            <Text className="text-[12px] text-[#26273A]">{transaction_unique_id.slice(0,12)}</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-col items-end gap-[5px]">
        <Text className="font-bold text-[18px] text-[#26273A]">${amount}</Text>
        <View className="w-[66px] h-5 bg-[#00FF94]/20 rounded-[4px] flex justify-center items-center">
          <Text className="text-[10px] text-[#5DC486]">{transaction_type}</Text>
        </View>
        <Text className="text-[#26273A]/60 text-[12px] text-right">17 Sep 2025,{"\n"} 10:34 AM</Text>
      </View>
    </View>
  );
};

export default Transaction;
