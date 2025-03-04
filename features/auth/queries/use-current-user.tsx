import { authEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  date_joined: string;
  total_spent: number;
} & { fullname: string };

type ResponseType = User;

const getCurrentUser = async (): Promise<ResponseType> => {
  try {
    const response = await getData(authEndpoints.user);
    console.log("curr user", response);
    return response;
  } catch (error) {
    console.error("Error current user", error);
    throw undefined;
  }
};

const currentUserDetailQuery = (): Pick<UseQueryOptions<ResponseType>, "queryKey" | "queryFn"> => ({
  queryKey: ["currentUser"],
  queryFn: getCurrentUser,
});

type UseCurrentUserProps = Pick<UseQueryOptions<ResponseType>, "initialData">;

const useCurrentUser = ({ initialData }: UseCurrentUserProps = {}) => {
  return useQuery<ResponseType>({
    ...currentUserDetailQuery(),
    initialData,
    select: (data) => {
      if (data) {
        const fullname = `${data.first_name} ${data.last_name}`;
        return { ...data, fullname };
      }
      return data;
    },
  });
};

export { getCurrentUser, currentUserDetailQuery, useCurrentUser };
