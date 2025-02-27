import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Alert, Pressable, View } from "react-native";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import Input from "@/components/Input";
import * as Icons from "phosphor-react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const SignUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const secPasswordRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current || !firstNameRef.current) {
      Alert.alert("Sign Up", "Please fill all the fields");
      return;
    }
    console.log("email", emailRef.current);
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
          {/* input */}
          <Input
            onChangeText={(value) => (firstNameRef.current = value)}
            placeholder="First name"
            icon={<Icons.User size={26} color={colors.neutral300} weight="fill" />}
          />
          <Input
            onChangeText={(value) => (lastNameRef.current = value)}
            placeholder="Last name"
            icon={<Icons.User size={26} color={colors.neutral300} weight="fill" />}
          />
          <Input
            onChangeText={(value) => (emailRef.current = value)}
            placeholder="Email"
            icon={<Icons.At size={26} color={colors.neutral300} weight="fill" />}
          />
          <Input
            onChangeText={(value) => (passwordRef.current = value)}
            secureTextEntry
            placeholder="Enter your password"
            icon={<Icons.Key size={26} color={colors.neutral300} weight="fill" />}
          />
          <Input
            onChangeText={(value) => (secPasswordRef.current = value)}
            secureTextEntry
            placeholder="Enter your password once"
            icon={<Icons.Key size={26} color={colors.neutral300} weight="fill" />}
          />
          <Button loading={isLoading} onPress={handleSubmit}>
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
