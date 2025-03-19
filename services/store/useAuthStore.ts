import { create } from "zustand";
import { getData, postData } from "../api/requests";
import { authEndpoints } from "../api/endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeTokens } from "@/utils/util";
import { router } from "expo-router";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  total_spent: string;
  date_joined: string;
};

type State = {
  user: User | null;
  isAuth: boolean;
  isSignInLoading: boolean;
  isSignUpLoading: boolean;
};

type Action = {
  signUp: (data: any) => void;
  signIn: (data: any) => void;
  signOut: () => void;
  currentUser: () => void;
};

type UseAuthStore = State & Action;

const useAuthStore = create<UseAuthStore>((set, get) => ({
  user: null,
  isSignInLoading: false,
  isSignUpLoading: false,
  isAuth: false,
  isUserLoading: false,
  currentUser: async () => {
    set({ isSignInLoading: true });
    try {
      const currentUser = await getData(authEndpoints.user);
      console.log("user current", currentUser);
      set({ user: currentUser });
      set({ isAuth: true });
    } catch (err) {
      set({ user: null });
      set({ isAuth: false });
    }
    set({ isSignInLoading: false });
  },
  signUp: async (data) => {
    set({ isSignInLoading: true });
    try {
      const { access, refresh } = await postData(authEndpoints.signUp, data);
      await AsyncStorage.setItem("access_token", access);
      await AsyncStorage.setItem("refresh_token", refresh);
    } catch (err) {
      console.log("err auth", err);
    }
    set({ isSignInLoading: false });
  },
  signIn: async (data: any) => {
    set({ isAuth: false });
    try {
      const { access, refresh } = await postData(authEndpoints.signIn, data);
      await AsyncStorage.setItem("access_token", access);
      await AsyncStorage.setItem("refresh_token", refresh);
    router.push('/(app)/(home)/user')
    } catch (err) {}
    set({ isAuth: true });
  },
  signOut: async () => {
    try {
      await AsyncStorage.multiRemove(["access_token", "refresh_token"]);
      router.replace("/(auth)/sign-in");
    } catch (err) {
      console.log("sign out err", err);
    }
  },
}));

export { useAuthStore };
