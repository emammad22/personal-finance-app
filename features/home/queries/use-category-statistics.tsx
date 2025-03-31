import { transactionEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { useQuery } from "@tanstack/react-query";
import { CategoryStatistics } from "../types";

export const useCategoryStatics = () => {
  return useQuery<CategoryStatistics>({
    queryKey: ["category-statistics"],
    queryFn: async () => {
      const response = await getData(transactionEndpoints.statistics);
      return response;
    },
  });
};
