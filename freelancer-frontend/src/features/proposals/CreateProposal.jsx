import { useForm } from "react-hook-form";

import useCreateProposal from "./useCreateProposal";

import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const CreateProposal = ({ projectId, onClose }) => {
  const { isCreating, createProposal } = useCreateProposal();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <div>
      < form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Description"
          name="description"
          maxlength={20}
          register={register}
          required
          validationSchema={{
            required: "Description is Required",
            minLength: { value: 2, message: "Description length is invalid" },
          }}
          errors={errors}
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "Price is Required",
          }}
        />
        <TextField
          label="Duration"
          name="duration"
          type="number"
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "Duration is Required",
          }}
        />
        <div className="!mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              Accept
            </button>
          )}
        </div>
      </>
    </div>
  );
};

export default CreateProposal;
