import { paymentEndpoints } from "@/services/api/endpoints";
import { postData } from "@/services/api/requests";
import { useSuccessModal } from "@/services/store/useSuccessModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) => {
      const response = await postData(paymentEndpoints.create, body);
      return response;
    },
    onSuccess: () => {
      useSuccessModal.getState().setSuccess()
      queryClient.invalidateQueries({queryKey : ['transactions']})
      console.log("transaction added successfully");
      
    },
  });
};

export { useCreateTransaction };
