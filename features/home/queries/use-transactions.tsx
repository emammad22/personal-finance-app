import { transactionEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { useQuery } from "@tanstack/react-query";

const useTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await getData(transactionEndpoints.transactions);
      return response;
    },
  });
};
export { useTransactions };
