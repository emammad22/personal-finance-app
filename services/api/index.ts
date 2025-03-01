import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const instance = axios.create({
  baseURL: API_URL,
});

export { instance };
