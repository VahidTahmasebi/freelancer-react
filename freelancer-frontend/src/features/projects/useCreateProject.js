import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createProjectApi } from "../../services/projectService";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success("The project was successfully Added");

      //   update date
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isCreating, createProject };
}
