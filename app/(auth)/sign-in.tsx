import React, { useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Pressable, View } from "react-native";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/Input";
import { Lock, Mail } from "lucide-react-native";
import { useSignIn } from "@/features/auth/queries/use-sign-in";

const SignIn = () => {
  const router = useRouter();
  const form = useForm();

  const signInMutation = useSignIn();

  const onSubmit = (data: any) => {
    signInMutation.mutate(data);
    console.log("data in sign in", data);
  };

  return (
    <ScreenWrapper>
      <View className="flex-1 gap-8 px-5">
        <BackButton />
        <View className="mt-5 gap-2">
          <Typo size={30} fontWeight={"800"}>
            Hey,
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Welcome Back
          </Typo>
        </View>
        {/* Form */}
        <View className="gap-5">
          <Typo size={16} color={colors.textLighter}>
            Login now to track all your expenses
          </Typo>
          {/* input */}
          <Controller
            control={form.control}
            name="email"
            render={({ field }) => (
              <Input
                placeholder="E-mail"
                icon={<Mail size={26} color={colors.neutral300} fontWeight={"fill"} />}
                {...field}
              />
            )}
          />
          <Controller
            control={form.control}
            name="password"
            render={({ field }) => (
              <Input
                placeholder="Password"
                secureTextEntry
                icon={<Lock size={26} color={colors.neutral300} fontWeight={"fill"} />}
                {...field}
              />
            )}
          />

          <Typo className={"self-end"} size={14} color={colors.text}>
            Forgor Password?
          </Typo>
          <Button loading={signInMutation.isPending} onPress={form.handleSubmit(onSubmit)}>
            <Typo color={colors.black} fontWeight={"700"} size={21}>
              Sign In
            </Typo>
          </Button>
        </View>
        {/* footer */}

        <View className="flex flex-row justify-center items-center gap-2">
          <Typo size={15}>Don`t have an account?</Typo>
          <Pressable onPress={() => router.push("/(auth)/sign-up")}>
            <Typo size={15} fontWeight={"700"} color={colors.primary}>
              Sign Up
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignIn;
