import { NavLink } from "react-router-dom";

import { HiCollection, HiHome } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="row-start-1 row-span-2 p-4 border-l border-gray-200 bg-secondary-0">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            <span>Home</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>Projects</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

const CustomNavLink = ({ children, to }) => {
  const navLinkClass =
    "flex items-center gap-x-2 py-1.5 px-2 rounded-lg hover:text-primary-900 hover:bg-primary-100/50 transition-all duration-300";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navLinkClass} bg-primary-100/50 text-primary-900`
          : `${navLinkClass} text-secondary-600`
      }>
      {children}
    </NavLink>
  );
};
