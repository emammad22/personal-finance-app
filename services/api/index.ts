import { getAccessToken } from "@/utils/util";
import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
axios.defaults.baseURL = API_URL;
const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    try {
      const accessToken = await getAccessToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { instance };
