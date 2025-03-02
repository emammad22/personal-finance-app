import React from "react";
import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="user" />
      <Stack.Screen name="profile" />
    </Stack>
  );
};

export default HomeLayout;
