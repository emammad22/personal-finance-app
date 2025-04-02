import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useCategoryStatics } from "../queries/use-category-statistics";
import { categoryColors } from "@/constants/icon";
import { ChartPie, ChevronRight } from "lucide-react-native";
import { router } from "expo-router";

const Statistics = () => {
  const categoryStatisticsQuery = useCategoryStatics();
  const statistics = categoryStatisticsQuery.data;

  return (
    <View className="bg-[#fdfbfd] rounded-[10px] flex flex-col gap-6">
      <View className="flex flex-col gap-4 p-5">
        <Text className="text-[16px]">Total Expense :</Text>
        <Text className="text-[25px] font-semibold">{statistics?.total_expense} $</Text>
      </View>
      {/* line bar */}
      <View className="flex flex-row px-5">
        {statistics?.categories?.map((statistic, idx) => {
          return (
            <View
            key={idx}
              style={{
                backgroundColor: `${categoryColors?.[statistic.category_name as keyof typeof categoryColors]}`,
                width: `${statistic.percentage}%`,
              }}
              className={`p-2 ${
                idx === 0 ? "rounded-l-[20px]" : idx === statistics?.categories.length - 1 ? "rounded-r-[20px]" : null
              }`}
            />
          );
        })}
      </View>
      {/* line bar detail simply */}
      <View className="flex flex-row flex-wrap gap-5 px-5">
        {statistics?.categories?.map((statistic, idx) => {
          return (
            <View key={idx} className="flex flex-col gap-3 basis-[30%]">
              <Text className="text-[18px]">{statistic.category_name}</Text>
              <View className="flex flex-row items-center gap-2">
                <View
                  style={{
                    backgroundColor: `${categoryColors?.[statistic.category_name as keyof typeof categoryColors]}`,
                  }}
                  className="w-[12px] h-[12px] rounded-[3px]"
                />
                <Text className="text-[18px]">{statistic?.total_amount} $</Text>
              </View>
            </View>
          );
        })}
      </View>

      <TouchableOpacity
        className="border-t-2 p-5 border-[#E0E8F2]"
        onPress={() => router.replace("/(app)/category-statistics")}>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row gap-3 items-center">
            <ChartPie size={30} />
            <Text className="text-[18px] text-blue-600 font-semibold">More details</Text>
          </View>
          <ChevronRight />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({});
