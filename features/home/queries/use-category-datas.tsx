import { paymentEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { useQuery } from "@tanstack/react-query";

const useCategoryData = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const data = await getData(paymentEndpoints.categories);
      return data;
    },
  });
};

export { useCategoryData };
