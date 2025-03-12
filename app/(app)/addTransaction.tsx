import { Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Star } from "lucide-react-native";
import BackButton from "@/components/BackButton";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Input from "@/components/Input";
import { useCategoryData } from "@/features/home/queries/use-category-datas";
import TransactionModal from "@/components/modals/TransactionModal";
import { useTransactionModal } from "@/services/store/useTransactionModal";

const AddTransaction = () => {
  const form = useForm();

  const { setTransactionOpen, setTransactionData, transactionDatas, setTransactionName } = useTransactionModal();
  const categoryQuery = useCategoryData();
  console.log("category", categoryQuery.data);

  useEffect(() => {
    console.log("transaction data pay", transactionDatas);
  }, [transactionDatas]);

  const handlePayment = (type: string) => {
    setTransactionOpen();
    setTransactionData(categoryQuery.data?.[type]);
    setTransactionName(type);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary/15">
      {/* container */}
      <FormProvider {...form}>
        <View className="p-3">
          <View className="flex flex-row justify-between items-center">
            <BackButton className="bg-white" color="black" />
            <Text className="text-[15px]">Entry</Text>
            <View>
              <Star color={"#222"} size={24} />
            </View>
          </View>
          {/* Transaction form */}
          <View>
            <Text className="text-[22px] mb-3 text-center font-semibold text-primaryDark">Transaction Form</Text>
            <View className="flex flex-col gap-2">
              <Controller
                control={form.control}
                name="amount"
                render={({ field }) => {
                  return <Input placeholder="Amount" {...field} />;
                }}
              />
              <Controller
                control={form.control}
                name="note"
                render={({ field }) => {
                  return <Input className="color-black" keyboardType="numeric" placeholder="Note" {...field} />;
                }}
              />
              <Controller
                control={form.control}
                name="payment_type"
                render={({ field }) => {
                  return (
                    <Pressable
                      onPress={() => handlePayment(field?.name)}
                      className="w-full flex justify-center h-14 border border-neutral300 rounded-2xl px-4">
                      <View className="text-neutral400 flex flex-row items-center gap-2">
                        <Text>Payment Type :</Text>
                        <View className="text-black rounded-[30px] p-2 bg-primary">
                          <Text className="text-white">{form?.watch(field.name)}</Text>
                        </View>
                      </View>
                    </Pressable>
                  );
                }}
              />
              <Controller
                control={form.control}
                name="transaction_type"
                render={({ field }) => {
                  return (
                    <Pressable
                      onPress={() => handlePayment(field?.name)}
                      className="w-full flex justify-center h-14 border border-neutral300 rounded-2xl px-4">
                      <View className="text-neutral400 flex flex-row items-center gap-2">
                        <Text>Transaction Type :</Text>
                        <View className="text-black rounded-[30px] p-2 bg-primary">
                          <Text className="text-white">{form?.watch(field.name)}</Text>
                        </View>
                      </View>
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>
        </View>
        <TransactionModal />
      </FormProvider>
    </SafeAreaView>
  );
};

export default AddTransaction;
