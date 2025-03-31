import { authEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { useQuery } from "@tanstack/react-query";
import { UserCard } from "../types";

export const useCardDetail = (id: number) => {
  return useQuery<UserCard, Error>({
    queryKey: ["cardDetails"],
    queryFn: async () => {
      const response = await getData(authEndpoints.cardDetail(id));
      return response;
    },
  });
};
