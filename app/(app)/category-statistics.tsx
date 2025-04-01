import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ArrowLeft, Fuel } from "lucide-react-native";
import PieChart from "react-native-pie-chart";
import { router } from "expo-router";
import { useCategoryStatics } from "@/features/home/queries/use-category-statistics";
import { categoryColors, transactionIcons } from "@/constants/icon";
import { Slice } from "react-native-pie-chart";

const CategoryStatistics = () => {
  const categoryStatisticsQuery = useCategoryStatics();
  const statistics = categoryStatisticsQuery.data;

  const series =
    statistics?.categories.reduce((acc, category) => {
      if (category.total_amount) {
        acc.push({
          value: category.total_amount,
          color: categoryColors?.[category.category_name as keyof typeof categoryColors],
        });
      }
      return acc;
    }, [] as Pick<Slice, "value" | "color">[]) || [];

  const TOTAL_TRANSACTIONS = statistics?.categories?.reduce((acc, category) => {
    acc += category.transaction_count;
    return acc;
  }, 0);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-col gap-5 p-5">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => router.replace("/(app)/(home)/history")}>
            <ArrowLeft size={30} />
          </TouchableOpacity>
          <Text className="text-[20px]">Expenses</Text>
          <View className="w-[20px]" />
        </View>
        {/* Pie chart for category monthly statistics */}
        <View className="flex flex-col gap-8 bg-[#eaeaea] rounded-[20px] p-6">
          <View className="flex flex-col gap-3">
            <Text>This month</Text>
            <View>
              <Text className="text-[35px] font-semibold">102.49$</Text>
            </View>
          </View>
          <View className="flex flex-col justify-center items-center relative">
            <PieChart series={series} widthAndHeight={300} cover={{ radius: 0.7, color: "white" }} padAngle={0.04} />
            <View className="absolute top-[40%] left-[30%] flex flex-col gap-4 items-center">
              <Text className="text-[20px]">All transactions</Text>
              <Text className="text-[16px] text-[#000]/20">{TOTAL_TRANSACTIONS} transactions</Text>
            </View>
          </View>
        </View>
        {/* Common info about each category transactions */}
        <View className="bg-[#eaeaea] p-6 rounded-[20px]">
          <View className="flex flex-col gap-5">
            {statistics?.categories?.map((category, idx) => {
              return (
                <View className="flex flex-row justify-between">
                  <View className="flex flex-row gap-6 items-center">
                    <View className="p-3 bg-slate-400 rounded-[10px]">
                      {transactionIcons?.[category.category_name as keyof typeof transactionIcons]({ size: 30 })}
                    </View>
                    <View className="flex flex-col gap-3">
                      <Text className="text-[18px]">{category.category_name}</Text>
                      <Text className="text-[13px]">{category.transaction_count} transactions</Text>
                    </View>
                  </View>
                  <View className="flex flex-col gap-3 items-end">
                    <Text className="text-[18px]">{category.total_amount} $</Text>
                    <Text>{category.percentage} %</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryStatistics;
