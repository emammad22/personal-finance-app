import { authEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { useQuery } from "@tanstack/react-query";
import { UserCard } from "../types";

export const useUserCards = () => {
  return useQuery<UserCard[]>({
    queryKey: ["cards"],
    queryFn: async () => {
      const response = await getData(authEndpoints.cards);
      return response;
    },
  });
};
