const RHFSelect = ({ label, name, register, options, required }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-secondary-700">
        {required && <span className="text-error">*</span>} {label}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RHFSelect;
