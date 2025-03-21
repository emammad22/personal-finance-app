import { authEndpoints } from "@/services/api/endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { router } from "expo-router";

type RequestType = {
  email: string;
  password: string;
};
type ResponseType = {
  access: string;
  refresh: string;
};

const login = async (body: RequestType): Promise<ResponseType> => {
  console.log("log", body);
  try {
    const response = await axios.post(authEndpoints.signIn, body);
    console.log("sign res", response.data);
    return response.data;
  } catch (error) {
    console.error("Error login", error);
    throw error;
  }
}; 

const useSignIn = () => {
  return useMutation<ResponseType, Error, RequestType>({
    mutationFn: login,
    onSuccess: async (data) => {
      await AsyncStorage.setItem("access_token", data.access);
      await AsyncStorage.setItem("refresh_token", data.refresh);
      router.replace("/(app)/(home)/user");
    },
  });
};

export { useSignIn, login };
