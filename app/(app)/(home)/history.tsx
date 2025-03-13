import { ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Transaction from "@/components/Transaction";
import { useTransactions } from "@/features/home/queries/use-transactions";
import { TransactionProps } from "@/features/home/types";

const History = () => {
  const transactionQuery = useTransactions();


  return (
    <SafeAreaView className="flex-1 bg-[#E0E8F2]">
      {/* container */}
      <ScrollView
        className="flex flex-col"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}>
        {/* Filter */}
        <View></View>
        {/* Transaction List */}
        <View className="flex flex-col gap-[15px] px-4 overflow-y">
          {/* Transaction Card */}
          {transactionQuery?.data?.map((transaction : TransactionProps) => {
            return <Transaction {...transaction} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
