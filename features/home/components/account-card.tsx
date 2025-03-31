import { Animated, Dimensions, Image, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useRef, useState } from "react";
import { UserCard } from "../types";

const AccountCard = ({ data }: { data: UserCard | undefined }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const { width, height } = Dimensions.get("screen");

  // front card rotation
  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const flipToFrontStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  // back card rotation
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipToBackStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const flipCard = () => {
    if (isFlipped) {
      // animate back to the front side
      Animated.spring(flipAnimation, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      // animate to the back side
      Animated.spring(flipAnimation, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      {/* cards container */}
      <View className="absolute z-50 top-[-90px]">
        {/* front card */}
        <Animated.View
          style={[flipToFrontStyle, { backfaceVisibility: "hidden", width: width - 30 }]}
          className="bg-[#fdfbfd] absolute p-5  h-[200px] flex flex-col justify-around shadow-lg left-[4%] rounded-[30px]">
          <View className="flex flex-col justify-between gap-3">
            <Text className="text-[20px] font-semibold text-black/30">Current balance :</Text>
            <Text className="text-[25px] font-semibold">{data?.balance}.00$</Text>
          </View>
          <View className="flex flex-col">
            <View>
              <Text>{data?.cardholder_name}</Text>
            </View>
            <View className="flex flex-row justify-between items-center">
              <Text className="text-[20px] font-light">{data?.number}</Text>
              <Image className="w-[40px] h-[40px]" source={require("@/assets/images/mastercard.svg")} />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[flipToBackStyle, { backfaceVisibility: "hidden", width: width - 30 }]}
          className="bg-[#fdfbfd] p-5 h-[200px] flex flex-col justify-around shadow-lg left-[4%] rounded-[30px]">
          <View className="flex flex-row justify-between items-center">
            <Text>MasterCard</Text>
          </View>
          <View>
            <Text className="text-[20px]">****** {data?.number.slice(14)}</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <Text className="text-[20px] font-light">Exp date : {data?.expire_date}</Text>
            <Image className="w-[50px] h-[50px]" source={require("@/assets/images/simcard.png")} />
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AccountCard;
