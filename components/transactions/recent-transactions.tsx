import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { useTransactions } from "@/features/home/queries/use-transactions";
import { TransactionProps } from "@/features/home/types";
import RecentTransactionItem from "./recent-transaction-item";

const RecentTransactions = () => {
  const router = useRouter();
  const transactionQuery = useTransactions();

  const handleViewAll = () => {
    router.replace("/(app)/(home)/history");
  };

  return (
    <View className="w-full bg-white rounded-[15px] border border-[#E0E8F2]/60">
      <View className="p-5 flex flex-row justify-between items-center">
        <Text className="text-[#26273A] text-[18px]">Recent transactions</Text>
        <TouchableOpacity onPress={handleViewAll} className="border border-[#E0E8F2] px-3 py-[6px] rounded-[8px]">
          <Text className="text-[#26273A] text-[18px]">View all</Text>
        </TouchableOpacity>
      </View>
      <View className="border border-[#E0E8F2]"></View>
      <View className="p-5 flex flex-col gap-[15px]">
        {transactionQuery.data?.slice(0, 5).map((transaction: TransactionProps, idx: number) => {
          return (
            <Link key={idx} href={`/(app)/transactionDetail/${transaction?.id}`}>
              <RecentTransactionItem  {...transaction} />
            </Link>
          );
        })}
      </View>
    </View>
  );
};

export default RecentTransactions;
