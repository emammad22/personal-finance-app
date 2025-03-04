import React from "react";
import { Stack, router } from "expo-router";
import { useCurrentUser } from "@/features/auth/queries/use-current-user";

const AuthLayout = () => {
  const currentUserQuery = useCurrentUser();

  if (currentUserQuery.data) {
    router.navigate("/(app)/(home)/user");
  }
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
};

export default AuthLayout;
