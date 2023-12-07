import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { changeProposalApi } from "../../services/proposalService";

export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data?.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, changeProposalStatus };
}
