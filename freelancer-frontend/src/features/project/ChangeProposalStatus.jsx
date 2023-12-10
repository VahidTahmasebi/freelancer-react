import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import useChangeProposalStatus from "./useChangeProposalStatus";

import Loading from "../../ui/Loading";
import RHFSelect from "../../ui/RHFSelect";

const options = [
  { label: "Failed", value: 0 },
  { label: "Awaiting confirmation", value: 1 },
  { label: "Accepted", value: 2 },
];

const ChangeProposalStatus = ({ proposalId, onClose }) => {
  const { id: projectId } = useParams();

  const queryClient = useQueryClient();

  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    changeProposalStatus(
      { proposalId: proposalId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          label="Change status"
          name="status"
          register={register}
          options={options}
          required
        />
        <div className="!mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              Accept
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ChangeProposalStatus;
