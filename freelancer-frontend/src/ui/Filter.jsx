import { useSearchParams } from "react-router-dom";

const Filter = ({ options, filterField }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleChange = (value) => {
    searchParams.set(filterField, value);
    //this not working  setSearchParams(value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>Status</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 rounded-lg bg-secondary-0">
        {options?.map(({ label, value }) => {
          const isActive = value === currentFilter;

          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => handleChange(value)}
              className={`py-2 px-4 rounded-md font-bold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "text-white !bg-primary-900"
                  : "text-secondary-800 bg-secondary-0"
              }`}>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
