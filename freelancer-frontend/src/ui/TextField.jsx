const TextField = ({
  type = "text",
  label,
  name,
  maxlength,
  register,
  required,
  validationSchema,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-secondary-700">
        {required && <span className="text-error">*</span>} {label}
      </label>
      <input
        {...register(name, validationSchema)}
        type={type}
        id={name}
        // name={name}
        maxLength={maxlength}
        autoComplete="off"
        // value={value}
        // onChange={onChange}
        className="textField__input"
      />
      {errors && errors[name] && (
        <span className="block mt-2 text-sm text-error">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextField;
