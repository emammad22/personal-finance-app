import React, { useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Pressable, View } from "react-native";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";

const SignUp = () => {
  const form = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (data : any) => {
    console.log("data", data);
  };

  return (
    <ScreenWrapper>
      <View className="flex-1 gap-8 px-5">
        <BackButton />
        <View className="mt-5 gap-2">
          <Typo size={30} fontWeight={"800"}>
            Let`s
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Get Started
          </Typo>
        </View>
        {/* Form */}
        <View className="gap-5">
          <Typo size={16} color={colors.textLighter}>
            Create an account to track your expenses
          </Typo>
          {/* inputs */}
          <Controller
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <Input
                placeholder="First name"
                // icon={<Icons.User size={26} color={colors.neutral300} weight="fill" />}
                {...field}
              />
            )}
          />
          <Controller
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <Input
                placeholder="Last name"
                // icon={<Icons.User size={26} color={colors.neutral300} weight="fill" />}
                {...field}
              />
            )}
          />
          <Controller
            control={form.control}
            name="email"
            render={({ field }) => (
              <Input
                placeholder="E-mail"
                // icon={<Icons.At size={26} color={colors.neutral300} weight="fill" />}
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
                // icon={<Icons.Key size={26} color={colors.neutral300} weight="fill" />}
                {...field}
              />
            )}
          />
          <Controller
            control={form.control}
            name="password2"
            render={({ field }) => (
              <Input
                placeholder="Password again"
                secureTextEntry
                // icon={<Icons.Key size={26} color={colors.neutral300} weight="fill" />}
                {...field}
              />
            )}
          />

          <Button loading={isLoading} onPress={form.handleSubmit(onSubmit)}>
            <Typo color={colors.black} fontWeight={"700"} size={21}>
              Sign Up
            </Typo>
          </Button>
        </View>
        {/* footer */}

        <View className="flex flex-row justify-center items-center gap-2">
          <Typo size={15}>Already have an account?</Typo>
          <Pressable onPress={() => router.push("/(auth)/sign-in")}>
            <Typo size={15} fontWeight={"700"} color={colors.primary}>
              Sign In
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;
