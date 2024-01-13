import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import useChangeUserStatus from "./useChangeUserStatus";

import Loading from "../../../ui/Loading";
import RHFSelect from "../../../ui/RHFSelect";

const options = [
  { label: "Failed", value: 0 },
  { label: "Awaiting confirmation", value: 1 },
  { label: "Accepted", value: 2 },
];

const ChangeUserStatus = ({ userId, onClose }) => {
  const queryClient = useQueryClient();

  const { isUpdating, changeUserStatus } = useChangeUserStatus();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
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

export default ChangeUserStatus;
