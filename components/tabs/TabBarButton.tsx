import { Pressable, Text, View } from "react-native";
import React, { useEffect } from "react";
import { icon } from "@/constants/icon";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

type TabNames = "user" | "history" | "more";

const TabBarButton = ({
  onPress,
  onLongPress,
  routeName,
  color,
  isFocused,
  label,
}: {
  onPress: () => void;
  onLongPress: () => void;
  routeName: string;
  color: string;
  isFocused: boolean;
  label: string;
}) => {
  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused, { duration: 350 });
  }, [scale, isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });

  const animateIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const top = interpolate(scale.value, [0, 1], [0, 9]);
    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
      top,
    };
  });

  return (
    <Pressable className="flex flex-1 gap-2 items-center justify-center" onPress={onPress} onLongPress={onLongPress}>
      <Animated.View style={animateIconStyle}>
        {icon[routeName as TabNames] && icon[routeName as TabNames]({ color: isFocused ? "#fff" : "#222" })}
      </Animated.View>

      <Animated.Text className={`${isFocused ? "text-white" : "text-[#222]"} text-[12px]`} style={[animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;
