import useCategories from "../../../hooks/useCategories";

import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOption = [
  { label: "Sort by (oldest)", value: "latest" },
  { label: "Sort by (newest)", value: "earliest" },
];

const statusOption = [
  { label: "ALL", value: "All" },
  { label: "OPEN", value: "Open" },
  { label: "CLOSED", value: "Closed" },
];

const ProjectsHeader = () => {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex justify-between items-center mb-8 text-secondary-700">
      <h1 className="text-lg font-bold">Projects list</h1>
      <div>
        <Filter options={statusOption} filterField="status" />
        <FilterDropDown options={sortOption} filterField="sort" />
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
