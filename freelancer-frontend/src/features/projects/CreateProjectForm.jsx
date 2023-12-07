import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

import useCategories from "../../hooks/useCategories";

import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import DatePickerField from "../../ui/DatePickerField";

import useCreateProject from "./useCreateProject";

const CreateProjectForm = ({ onclose }) => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    createProject(newProject, {
      onSuccess: () => {
        onclose();
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <TextField
        label="Subject"
        name="subject"
        maxlength={20}
        register={register}
        required
        validationSchema={{
          required: "Subject is Required",
          minLength: { value: 2, message: "Title length is invalid" },
        }}
        errors={errors}
      />
      <TextField
        label="Description"
        name="description"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "Description is Required",
          minLength: { value: 3, message: "Description length is invalid" },
        }}
      />
      <TextField
        label="Budget"
        name="budget"
        type="number"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "Budget is Required",
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
      <div className="!mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            Accept
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateProjectForm;
