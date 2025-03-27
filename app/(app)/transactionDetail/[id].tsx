import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeftRight, ChevronLeft, DollarSign, FilePenLine, Heart, NotebookPen, Trash } from "lucide-react-native";
import { useTransactionDetail } from "@/features/home/queries/use-transaction-detail";
import { transactionIcons } from "@/constants/icon";
import { useDeleteTransaction } from "@/features/home/queries/use-delete-transaction";
import { useSaveTransaction } from "@/features/home/queries/use-save-transaction";

const TransactionDetail = () => {
  const { id } = useLocalSearchParams();

  const transactionDetailQuery = useTransactionDetail(Number(id));
  const deleteTransactionQuery = useDeleteTransaction();
  const saveTransactionQuery = useSaveTransaction();

  const handleDelete = () => {
    deleteTransactionQuery.mutate(Number(id));
  };

  const handleSave = () => {
    saveTransactionQuery.mutate(Number(id));
  };

  const date = new Date(transactionDetailQuery.data?.created_at as string).toLocaleString();

  return (
    <SafeAreaView>
      <View className="p-2 flex flex-row justify-between">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={35} />
        </TouchableOpacity>
      </View>
      <View className="p-2 flex flex-col gap-2">
        <View className="self-center">
          <Text className="text-[16px] text-[#26273A]/70">{date}</Text>
        </View>
        <View className="flex flex-col justify-center items-center gap-5">
          <Text className="text-[25px] font-semibold">{transactionDetailQuery.data?.category?.name}</Text>
          <View className="w-[92px] h-[92px] rounded-[15px] bg-[#B3C5F7] flex justify-center items-center">
            {transactionDetailQuery.data?.category?.name
              ? transactionIcons[transactionDetailQuery.data?.category?.name as keyof typeof transactionIcons]?.({
                  size: 50,
                })
              : null}
          </View>
          <Text className="font-bold text-[30px]">-{transactionDetailQuery.data?.amount} $</Text>
          <View className="flex flex-row gap-9">
            <TouchableOpacity
              onPress={handleDelete}
              className="bg-[#cf3131] w-[60px] h-[60px] flex justify-center items-center rounded-full">
              <Trash size={35} color={"#fff"} />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#A7E8BD] w-[60px] h-[60px] flex justify-center items-center rounded-full">
              <FilePenLine color={"#fff"} size={35} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSave}
              className="bg-[#E07A5F] w-[60px] h-[60px] flex justify-center items-center rounded-full">
              <Heart
                size={35}
                color={transactionDetailQuery.data?.is_saved ? "red" : "#fff"}
                fill={transactionDetailQuery.data?.is_saved ? "red" : "white"}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Info */}
        <View className="p-3 flex flex-col gap-2">
          <Text className="text-[16px]">Məlunatlar</Text>
          <View className="bg-white rounded-[20px] p-7 flex flex-col gap-7">
            <View className="flex flex-row gap-[25px] items-center">
              <View className="w-[40px] h-[40px] bg-[#307BF6] flex justify-center items-center rounded-full">
                <DollarSign color={"white"} />
              </View>
              <View className="flex flex-col gap-1">
                <Text className="text-[16px] font-extralight">Balans</Text>
                <Text className="text-[16px] font-medium">10.00 $</Text>
              </View>
            </View>
            <View className="flex flex-row gap-[25px] items-center">
              <View className="w-[40px] h-[40px] bg-[#307BF6] flex justify-center items-center rounded-full">
                <NotebookPen color={"white"} />
              </View>
              <View className="flex flex-col gap-1">
                <Text className="text-[16px] font-extralight">Qeyd</Text>
                <Text className="text-[16px] font-medium">{transactionDetailQuery?.data?.note}</Text>
              </View>
            </View>
            <View className="flex flex-row gap-[25px] items-center">
              <View className="w-[40px] h-[40px] bg-[#307BF6] flex justify-center items-center rounded-full">
                <ArrowLeftRight color={"white"} />
              </View>
              <View className="flex flex-col gap-1">
                <Text className="text-[16px] font-extralight">Tranzaksiya tipi</Text>
                <Text className="text-[16px] font-medium">{transactionDetailQuery?.data?.transaction_type}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetail;
