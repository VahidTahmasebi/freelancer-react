import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { logoutApi } from "../../services/authService";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (data) => {
      // remove data
      queryClient.removeQueries();
      // Not returning to the previous page
      navigate("/auth", { replace: true });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isPending, logout };
}
