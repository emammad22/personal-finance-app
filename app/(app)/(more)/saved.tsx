import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft } from "lucide-react-native";
import { Link, router } from "expo-router";
import Transaction from "@/components/transactions/history-transaction";
import { TransactionProps } from "@/features/home/types";
import { useSavedTransactions } from "@/features/more/queries/use-saved-transactions";

const Saved = () => {
  const savedTransactionsQuery = useSavedTransactions();
  const SAVED_TRANSACTIONS = savedTransactionsQuery.data;
  console.log("saved", SAVED_TRANSACTIONS);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-col gap-6 p-5">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={30} />
          </TouchableOpacity>
          <Text className="text-[20px] font-semibold">Saved Transactions</Text>
          <View className="w-[20px]" />
        </View>
        <View className="flex flex-col gap-3">
          {SAVED_TRANSACTIONS?.map((transaction: TransactionProps, idx: number) => {
            return (
              <Link key={idx} href={`/(app)/transactionDetail/${transaction.id}`}>
                <Transaction {...transaction} starred={true}/>
              </Link>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Saved;
