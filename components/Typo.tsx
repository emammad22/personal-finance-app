import { Text, TextStyle } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";
import { TypoProps } from "@/types";
import { verticalScale } from "@/utils/styling";

const Typo = ({ size, color = colors.text, children, fontWeight, className, textProps }: TypoProps) => {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };
  return <Text className={`${className}`} style={[textStyle]}>{children}</Text>;
};

export default Typo;
