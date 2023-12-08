const Sidebar = ({ children }) => {
  return (
    <div className="row-start-1 row-span-2 p-4 border-l border-gray-200 bg-secondary-0">
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
};

export default Sidebar;
