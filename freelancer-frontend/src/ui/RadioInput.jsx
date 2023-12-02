const RadioInput = ({ label, name, id, checked, value, onChange }) => {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
        className="form-radio w-4 h-4 focus:ring-primary-900 text-primary-900 cursor-pointer"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
