import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/tabs/TabBar";

const HomeLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "green"}} tabBar={(props)=> {
      console.log('props tab', props?.descriptors[props.state.routes[0].key].options)
      return  <TabBar {...props}/>}}>
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
        }}
      />
      <Tabs.Screen
        name="savedtransactions"
        options={{
          title: "Saved",
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
