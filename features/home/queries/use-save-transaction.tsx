import { transactionEndpoints } from "@/services/api/endpoints";
import { postData } from "@/services/api/requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSuccessModal } from "@/services/store/useSuccessModal";

const useSaveTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await postData(transactionEndpoints.save(id));
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transaction detail"] });
      useSuccessModal.getState().setSuccess();
    },
  });
};
export { useSaveTransaction };
