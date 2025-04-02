import { TransactionProps } from "@/features/home/types";
import { transactionEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { useQuery } from "@tanstack/react-query";

export const useSavedTransactions = () => {
  return useQuery<TransactionProps[]>({
    queryKey: ["saved-transactions"],
    queryFn: async () => {
      const response = await getData(transactionEndpoints.savedTransactions);
      return response;
    },
  });
};
