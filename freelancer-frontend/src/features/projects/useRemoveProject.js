import { toast } from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { removeProjectsApi } from "../../services/projectService";

export default function useRemoveProject() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: removeProject } = useMutation({
    mutationFn: removeProjectsApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success("The project was successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, removeProject };
}
