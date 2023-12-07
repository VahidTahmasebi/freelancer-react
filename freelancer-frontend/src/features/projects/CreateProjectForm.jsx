import { useForm } from "react-hook-form";

import TextField from "../../ui/TextField";

const CreateProjectForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <TextField
        label="Project Subject"
        name="projectSubject"
        maxlength={20}
        register={register}
        required
        validationSchema={{
          required: "Subject is Required",
          minLength: { value: 3, message: "Title length is invalid" },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
      />
      <TextField
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
      />
      <button type="submit" className="btn btn--primary w-full">
        Accept
      </button>
    </form>
  );
};

export default CreateProjectForm;
