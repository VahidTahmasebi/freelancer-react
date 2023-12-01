const TextField = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        autoComplete="off"
        value={value}
        onChange={onChange}
        className="textField__input"
      />
    </div>
  );
};

export default TextField;
