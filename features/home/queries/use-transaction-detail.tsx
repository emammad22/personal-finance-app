import { transactionEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { useQuery } from "@tanstack/react-query";
import { TransactionProps } from "../types";

const useTransactionDetail = (id : number) => {
  return useQuery<TransactionProps>({
    queryKey: ["transaction detail"],
    queryFn: async () => {
      const response = await getData(transactionEndpoints.details(id));
      return response;
    },
  });
};
export { useTransactionDetail };
