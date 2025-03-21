import React from "react";
import { Stack, router} from "expo-router";
import { useCurrentUser } from "@/features/auth/queries/use-current-user";

const AuthLayout = () => {
  const currentUserQuery = useCurrentUser();

  if (currentUserQuery.data) {
    router.replace("/(app)/(home)/user");
  }

  return <Stack screenOptions={{ headerShown: false, gestureEnabled : false }}></Stack>;
};

export default AuthLayout;
