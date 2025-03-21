import React from "react";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { currentUserDetailQuery } from "@/features/auth/queries/use-current-user";

const queryClient = new QueryClient();
queryClient.ensureQueryData(currentUserDetailQuery());
const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false, gestureEnabled: false }} />
    </QueryClientProvider>
  );
};

export default RootLayout;
