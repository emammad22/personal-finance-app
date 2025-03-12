import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Pressable, View } from "react-native";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Lock, Mail, User } from "lucide-react-native";
import { useAuthStore } from "@/services/store/useAuthStore";
import Loading from "@/components/Loading";

const SignUp = () => {
  const form = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: undefined,
      password2: undefined,
    },
  });

  const router = useRouter();
  const { signUp, isSignInLoading } = useAuthStore();

  const onSubmit = (data: any) => {
    console.log("data", data);
    signUp(data);
  };

  return (
    <ScreenWrapper>
      <View className="flex-1 gap-8 px-5">
        <BackButton className="bg-[#AA60C8]"/>
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
                icon={<User size={26} color={colors.neutral300} fontWeight={"fill"} />}
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
                icon={<User size={26} color={colors.neutral300} fontWeight={"fill"} />}
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
          <Controller
            control={form.control}
            name="password2"
            render={({ field }) => (
              <Input
                placeholder="Password again"
                secureTextEntry
                icon={<Lock size={26} color={colors.neutral300} fontWeight={"fill"} />}
                {...field}
              />
            )}
          />

          <Button loading={isSignInLoading} onPress={form.handleSubmit(onSubmit)}>
            {isSignInLoading ? (
              <Loading color={"white"} />
            ) : (
              <Typo color={colors.white} fontWeight={"700"} size={21}>
                Sign Up
              </Typo>
            )}
          </Button>
        </View>
        {/* footer */}

        <View className="flex flex-row justify-center items-center gap-2">
          <Typo size={15}>Already have an account?</Typo>
          <Pressable onPress={() => router.push("/(auth)/sign-in")}>
            <Typo size={15} fontWeight={"700"} color={"#AA60C8"}>
              Sign In
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;
