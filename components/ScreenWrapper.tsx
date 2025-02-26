import { Dimensions, Platform, StatusBar, View } from "react-native";
import React from "react";
import { ScreenWrapperProps } from "@/types";

const { height } = Dimensions.get("window");

console.log('ios height', height)

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  let paddingTop = Platform.OS === "ios" ? height * 0.06 : 50;

  return (
    <View style={{ paddingTop }} className={`${style} flex-1 bg-neutral900`}>
      <StatusBar barStyle={"light-content"} />
      {children}
    </View> 
  );
};

export default ScreenWrapper;
