import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ArrowLeft, Fuel } from "lucide-react-native";
import PieChart from "react-native-pie-chart";
import { router } from "expo-router";

const CategoryStatistics = () => {
  const series = [
    { value: 430, color: "#fbd203", },
    { value: 321, color: "#ffb300" },
    { value: 185, color: "#ff9100" },
    { value: 123, color: "#ff6c00" },
  ];

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-col gap-5 p-5">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={()=>router.replace('/(app)/(home)/history')}>
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
            <PieChart  series={series} widthAndHeight={300} cover={{ radius: 0.7, color: "white" }} padAngle={0.04} />
            <View className="absolute top-[40%] left-[30%] flex flex-col gap-4 items-center">
              <Text className="text-[20px]">All transactions</Text>
              <Text className="text-[16px] text-[#000]/20">26 transactions</Text>
            </View>
          </View>
        </View>
        {/* Common info about each category transactions */}
        <View className="bg-[#eaeaea] p-6 rounded-[20px]">
          <View className="flex flex-row justify-between">
            <View className="flex flex-row gap-6 items-center">
              <Fuel size={30} />
              <View className="flex flex-col gap-3">
                <Text>YDM</Text>
                <Text>2 transactions</Text>
              </View>
            </View>
            <View className="flex flex-col gap-3">
              <Text>35.00$</Text>
              <Text>33.02%</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryStatistics;
