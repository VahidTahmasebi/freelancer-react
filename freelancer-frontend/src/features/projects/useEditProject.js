import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { editProjectApi } from "../../services/projectService";

export default function useEditProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success("The project was successfully edited");

      //   update date
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isEditing, editProject };
}
