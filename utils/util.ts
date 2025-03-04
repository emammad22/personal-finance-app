import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccessToken = async () => {
  try {
    return await AsyncStorage.getItem("access_token");
  } catch (err) {
    console.log("Token is not found");
  }
};

export const getRefreshToken = async () => {
  try {
    return await AsyncStorage.getItem("refresh_token");
  } catch (err) {
    console.log("Refresh token error");
  }
};

export const removeTokens = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    console.log("Tokens cannot be removed");
  }
};
