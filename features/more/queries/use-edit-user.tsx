import { authEndpoints } from "@/services/api/endpoints";
import { patchData } from "@/services/api/requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserEdit } from "../store/useUserEdit";

const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (body: any) => {
      const response = await patchData(authEndpoints.user, body);
      console.log('response edit', response)
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      useUserEdit.getState().setEditClose()
      console.log("succesfully edited");
    },
    onError : ()=>{
        console.log('edit user error')
    }
  });
};

export { useEditUser };
