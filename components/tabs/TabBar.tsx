import { LayoutChangeEvent, View } from "react-native";
import React, { useEffect, useState } from "react";
import TabBarButton from "./TabBarButton";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const TabBar = ({ state, descriptors, navigation }: { state: any; descriptors: any; navigation: any }) => {
  const onLongPress = () => {};
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
  console.log("state", state.routes.length);
  const buttonWidth = dimensions.width / state.routes.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <View
      onLayout={onTabbarLayout}
      className="absolute bottom-14 flex  flex-row justify-between items-center bg-white mx-[50px] py-3 rounded-[30px]">
      <Animated.View
        className={"absolute bg-[#723FEB] rounded-[30px] mx-[12px]"}
        style={[{ height: dimensions.height - 15, width: buttonWidth - 25 }, animatedStyle]}
      />
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;
        const options = descriptors[route.key].options;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, { duration: 1500 });
          const event = navigation.emit({
            type: "onPress",
            target: route.key ,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            label={options.title}
            color={isFocused ? "#673ab7" : "#222"}
          />
        );
      })}
    </View>
  );
};

export default TabBar;
