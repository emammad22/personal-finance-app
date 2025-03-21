import { Pressable, SafeAreaView, StatusBar, Text, View } from "react-native";
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
import SelectModal from "@/components/select-modal";
import SuccessfulModal from "@/components/modals/SuccessfulModal";
import { router } from "expo-router";
import { useSuccessModal } from "@/services/store/useSuccessModal";

const AddTransaction = () => {
  const form = useForm();

  const { setTransactionOpen, setTransactionData, setTransactionName } = useTransactionModal();
  const { setCloseSuccess } = useSuccessModal();
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

  const handleSelect = (type: string, list: any[]) => {
    setTransactionOpen();
    setTransactionData(list);
    setTransactionName(type);
  };

  const onSubmit = (data: any) => {
    transactionMutation.mutate(data);
    console.log("onsubmit transaction", data);
  };

  const handleLook = () => {
    router.replace("/(app)/(home)/history");
    setCloseSuccess();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#eaeaea]">
      <StatusBar barStyle={"dark-content"} />
      {/* container */}
      <FormProvider {...form}>
        <View className="p-3">
          <View className="flex flex-row justify-between items-center">
            <BackButton className="bg-[#307BF6]" color="white" />
            <Text className="text-[15px]">Entry</Text>
            <View>
              <Star color={"#222"} size={24} />
            </View>
          </View>
          {/* Transaction form */}
          <View className="flex flex-col gap-5">
            <Text className="text-[22px] mb-3 text-center font-semibold text-[#2c1a47]">Transaction Form</Text>
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
                  return <Input className="color-black" placeholder="Note" {...field} />;
                }}
              />
              <Controller
                control={form.control}
                name="payment_type"
                render={({ field }) => {
                  return <SelectModal handleSelect={handleSelect} list={convertPaymentData} {...field} />;
                }}
              />
              <Controller
                control={form.control}
                name="transaction_type"
                render={({ field }) => {
                  return <SelectModal handleSelect={handleSelect} list={convertedTransactionData} {...field} />;
                }}
              />
              <Controller
                control={form.control}
                name="category"
                render={({ field }) => {
                  return <SelectModal handleSelect={handleSelect} list={convertedCategoryData} {...field} />;
                }}
              />
            </View>
            <Button
              loading={transactionMutation.isPending}
              onPress={form.handleSubmit(onSubmit)}
              textStyle="text-white font-semibold text-[18px]"
              classname="bg-[#307BF6]">
              Add Transaction
            </Button>
          </View>
        </View>
        <TransactionModal />
        <SuccessfulModal secondaryFn={handleLook} main="Yenisini yarat" secondary="Tranzaksiyalara bax" />
      </FormProvider>
    </SafeAreaView>
  );
};

export default AddTransaction;
