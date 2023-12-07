import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

import useCategories from "../../hooks/useCategories";

import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import DatePickerField from "../../ui/DatePickerField";

const CreateProjectForm = () => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const { categories } = useCategories();

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
      <RHFSelect
        label="Category"
        name="category"
        register={register}
        options={categories}
        required
      />

      <div>
        <label htmlFor="" className="block mb-2 text-secondary-700">
          Tag
        </label>
        <TagsInput name="tags" value={tags} onChange={setTags} />
      </div>
      <DatePickerField label="Deadline" date={date} setDate={setDate} />
      <button type="submit" className="btn btn--primary w-full">
        Accept
      </button>
    </form>
  );
};

export default CreateProjectForm;
