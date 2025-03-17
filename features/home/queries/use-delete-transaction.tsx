import { transactionEndpoints } from "@/services/api/endpoints";
import { deleteData } from "@/services/api/requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSuccessModal } from "@/services/store/useSuccessModal";
import { router } from "expo-router";

const useDeleteTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await deleteData(transactionEndpoints.details(id));
      return response;
    },
    onSuccess: () => {
      useSuccessModal.getState().setSuccess();
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      router.back()
    },
  });
};
export { useDeleteTransaction };
