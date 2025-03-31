import { ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Transaction from "@/components/transactions/history-transaction";
import { useTransactions } from "@/features/home/queries/use-transactions";
import { TransactionProps } from "@/features/home/types";
import { ChevronDown, CreditCard, SearchIcon, SlidersHorizontal } from "lucide-react-native";
import { Link } from "expo-router";
import SuccessfulModal from "@/components/modals/SuccessfulModal";

const History = () => {
  const transactionQuery = useTransactions();

  const formattedTransactions = () => {
    return transactionQuery.data.reduce((acc: any, transaction: TransactionProps) => {
      const date = new Date(transaction.created_at);
      const formattedDate = `${date.toLocaleString("en-US", { month: "long" })} ${date.getDate()}`;

      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }
      acc[formattedDate].push(transaction);
      return acc;
    }, {} as Record<string, TransactionProps[]>);
  };

  const transactionList: Record<string, TransactionProps[]> = formattedTransactions();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle={"dark-content"} />
      {/* container */}
      <View>
        <View className="bg-white h-[45px] flex flex-row item gap-3 m-5">
          <View className="accounts-select bg-[#307BF6]/50 flex flex-row items-center justify-between basis-[70%] rounded-[8px] p-3">
            <View className="flex flex-row items-center gap-2">
              <CreditCard size={27} color={"white"} />
              <Text className="text-white text-[15px]">ending with **9749</Text>
            </View>
            <ChevronDown size={27} color={"white"} />
          </View>
          <View className="flex flex-row items-center gap-3">
            <TouchableOpacity className="border border-[#E0E8F2] bg-white rounded-[8px] w-[45px] h-[45px] flex items-center justify-center">
              <SearchIcon color={"#26273A"} fontWeight={900} size={20} />
            </TouchableOpacity>
            <TouchableOpacity className="border border-[#E0E8F2] bg-white rounded-[8px] w-[45px] h-[45px] flex items-center justify-center">
              <SlidersHorizontal color={"#26273A"} fontWeight={900} size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          className="flex flex-col  bg-[#E0E8F2]/70"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 110, paddingTop: 20 }}>
          {/* Filter */}
          {/* Transaction List */}
          <View className="flex-1 flex-col gap-[15px] px-4 overflow-y">
            {/* Transaction Card */}
            {Object.entries(transactionList).map(([date, transactions], idx) => {
              return (
                <View className="flex flex-col gap-3">
                  <Text>{date}</Text>
                  <View className="flex flex-col gap-3">
                    {transactions?.map((transaction: TransactionProps, idx: number) => {
                      return (
                        <Link href={`/(app)/transactionDetail/${transaction.id}`}>
                          <Transaction {...transaction} />
                        </Link>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <SuccessfulModal />
    </SafeAreaView>
  );
};

export default History;
