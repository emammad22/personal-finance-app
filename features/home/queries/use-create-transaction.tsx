import { paymentEndpoints } from "@/services/api/endpoints";
import { postData } from "@/services/api/requests";
import { useMutation } from "@tanstack/react-query";

const useCreateTransaction = () => {
  return useMutation({
    mutationFn: async (body: any) => {
      const response = await postData(paymentEndpoints.create, body);
      return response;
    },
    onSuccess: () => {
      console.log("transaction added successfully");
    },
  });
};

export { useCreateTransaction };
