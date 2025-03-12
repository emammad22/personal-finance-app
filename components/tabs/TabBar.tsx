import { View } from "react-native";
import React from "react";
import TabBarButton from "./TabBarButton";

const TabBar = ({ state, descriptors, navigation }: { state: any; descriptors: any; navigation: any }) => {
  const onLongPress = () => {};
  console.log("state", state.routes.length);

  return (
    <View className="absolute bottom-10 flex  flex-row justify-between items-center bg-white mx-[30px] py-3 rounded-[30px]">
      <View className={"absolute bg-[#723FEB] rounded-[30px] mx-[12px]"} />
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;
        const options = descriptors[route.key].options;

        const onPress = () => {
          const event = navigation.emit({
            type: "onPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented && route.name !== "modal") {
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
