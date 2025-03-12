import { Pressable, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { Star } from "lucide-react-native";
import BackButton from "@/components/BackButton";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Input from "@/components/Input";
import { useCategoryData } from "@/features/home/queries/use-category-datas";
import TransactionModal from "@/components/modals/TransactionModal";
import { useTransactionModal } from "@/services/store/useTransactionModal";
import Button from "@/components/Button";
import { useCreateTransaction } from "@/features/home/queries/use-create-transaction";

const AddTransaction = () => {
  const form = useForm();

  const { setTransactionOpen, setTransactionData, setTransactionName } = useTransactionModal();
  const transactionMutation = useCreateTransaction();
  const categoryQuery = useCategoryData();

  const convertPaymentData = categoryQuery.data?.payment_type?.map((item: string) => ({
    name: item,
    value: item,
  }));

  const convertedTransactionData = categoryQuery.data?.transaction_type?.map((item: string) => ({
    name: item,
    value: item,
  }));

  const convertedCategoryData = categoryQuery.data?.categories?.map((item: any) => ({
    name: item.name,
    value: item.id,
  }));

  const handlePayment = (type: string) => {
    setTransactionOpen();
    setTransactionData(convertPaymentData);
    setTransactionName(type);
  };

  const handleTransaction = (type: string) => {
    setTransactionOpen();
    setTransactionData(convertedTransactionData);
    setTransactionName(type);
  };

  const handleCategory = (type: string) => {
    setTransactionOpen();
    setTransactionData(convertedCategoryData);
    setTransactionName(type);
  };

  const onSubmit = (data : any)=>{
    transactionMutation.mutate(data)
    console.log('onsubmit transaction', data)
  }

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
          <View className="flex flex-col gap-5">
            <Text className="text-[22px] mb-3 text-center font-semibold text-primaryDark">Transaction Form</Text>
            <View className="flex flex-col gap-2">
              <Controller
                control={form.control}
                name="amount"
                render={({ field }) => {
                  return <Input className="color-black" placeholder="Amount" keyboardType="numeric" {...field} />;
                }}
              />
              <Controller
                control={form.control}
                name="note"
                render={({ field }) => {
                  return <Input className="color-black"  placeholder="Note" {...field} />;
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
                      onPress={() => handleTransaction(field?.name)}
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
              <Controller
                control={form.control}
                name="category"
                render={({ field }) => {
                  return (
                    <Pressable
                      onPress={() => handleCategory(field?.name)}
                      className="w-full flex justify-center h-14 border border-neutral300 rounded-2xl px-4">
                      <View className="text-neutral400 flex flex-row items-center gap-2">
                        <Text>Category Type :</Text>
                        <View className="text-black rounded-[30px] p-2 bg-primary">
                          <Text className="text-white">{form?.watch(field.name)}</Text>
                        </View>
                      </View>
                    </Pressable>
                  );
                }}
              />
            </View>
            <Button loading={transactionMutation.isPending} onPress={form.handleSubmit(onSubmit)} classname="text-white font-semibold text-[18px]">Add Transaction</Button>
          </View>
        </View>
        <TransactionModal />
      </FormProvider>
    </SafeAreaView>
  );
};

export default AddTransaction;
