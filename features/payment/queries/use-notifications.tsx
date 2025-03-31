import { notificationsEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { useQuery } from "@tanstack/react-query";

export const useNotifications = () => {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const response = await getData(notificationsEndpoints.notifications);
      console.log('res not', response)
      return response;
    },
  });
};
