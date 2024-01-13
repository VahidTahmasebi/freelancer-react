import {
  HiCollection,
  HiHome,
  HiUser,
  HiOutlineViewGrid,
} from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

const AdminLayout = () => {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>Home</span>
        </CustomNavLink>

        <CustomNavLink to="users">
          <HiUser />
          <span>Users</span>
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiOutlineViewGrid />
          <span>Projects</span>
        </CustomNavLink>

        <CustomNavLink to="proposals">
          <HiCollection />
          <span>Projects</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
};

export default AdminLayout;
