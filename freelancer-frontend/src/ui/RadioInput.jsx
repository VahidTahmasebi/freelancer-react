const RadioInput = ({
  label,
  name,
  id,
  watch,
  value,
  register,
  validationSchema,
}) => {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        checked={watch(name) === value}
        value={value}
        {...register(name, validationSchema)}
        className="form-radio w-4 h-4 focus:ring-primary-900 text-primary-900 cursor-pointer"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
