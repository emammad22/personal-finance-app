import { create } from "zustand";
import { postData } from "../api/requests";
import { authEndpoints } from "../api/endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  date_joined: string;
};

type State = {
  user: User | null;
  isAuth : boolean;
  isSignInLoading: boolean;
  isSignUpLoading: boolean;
};

type Action = {
  signUp: (data: any) => void;
  signIn: (data: any) => void;
};

type UseAuthStore = State & Action;

const useAuthStore = create<UseAuthStore>((set, get) => ({
  user: null,
  isSignInLoading: false,
  isAuth : false,
  isSignUpLoading: false,
  signUp: async (data) => {
    set({ isSignInLoading: true });
    try {
      const { access, refresh, user } = await postData(authEndpoints.signUp, data);
      set({ user: user });
      await AsyncStorage.setItem("access_token", access);
      await AsyncStorage.setItem("refresh_token", refresh);
    } catch (err) {
      console.log("err auth", err);
    }
    set({ isSignInLoading: false });
  },
  signIn: async (data: any) => {
    set({isAuth : false})
    try {
      const { access, refresh } = await postData(authEndpoints.signIn, data);
      await AsyncStorage.setItem("access_token", access);
      await AsyncStorage.setItem("refresh_token", refresh);
    } catch (err) {}
    set({isAuth : true})
  },
}));

export { useAuthStore };
