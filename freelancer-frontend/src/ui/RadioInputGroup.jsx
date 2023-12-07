import RadioInput from "./RadioInput";

const RadioInputGroup = ({ configs, register, watch, errors }) => {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-x-8">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            name={name}
            id={value}
            value={value}
            // checked={role === "OWNER"}
            watch={watch}
            register={register}
            validationSchema={validationSchema}
            // onChange={(e) => setRole(e.target.value)}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="block mt-2 text-sm text-error">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default RadioInputGroup;
