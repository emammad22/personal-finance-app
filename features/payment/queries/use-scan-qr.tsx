import { billProcessingEndpoints } from "@/services/api/endpoints";
import { postData } from "@/services/api/requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useScanner } from "../store/useScanner";

const useScanQR = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) => {
      const response = await postData(billProcessingEndpoints.scanQR, body);
      console.log("response qr", response);
      useScanner.getState().setQrResponse(response)
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      console.log("succesfully scanned");
    },
    onError: () => {
      console.log("edit user error");
    },
  });
};

export { useScanQR };
