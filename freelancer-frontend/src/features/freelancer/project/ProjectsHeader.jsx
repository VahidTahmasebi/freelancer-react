import useCategories from "../../../hooks/useCategories";

import FilterDropDown from "../../../ui/FilterDropDown";

const ProjectsHeader = () => {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex justify-between items-center mb-8 text-secondary-700">
      <h1 className="text-lg font-bold">Projects list</h1>
      <div>
        <FilterDropDown
          options={[
            { value: "ALL", label: "Category (All)" },
            ...transformedCategories,
          ]}
          filterField="category"
        />
      </div>
    </div>
  );
};

export default ProjectsHeader;
