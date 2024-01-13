import { useQuery } from "@tanstack/react-query";

import { getUsersApi } from "../../services/authService";

export default function useUsers() {
  const { isLoading, data } = useQuery({
    // second index
    // Whenever the ID changes, the key changes as well
    queryKey: ["users"],
    queryFn: getUsersApi,
  });
  const { users } = data || {};
  return { isLoading, users };
}
