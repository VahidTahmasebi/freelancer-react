import { Outlet } from "react-router-dom";

import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      {/* <Sidebar /> */}
      {children}
      <div className="p-8 bg-secondary-0 overflow-y-auto">
        <div className="max-w-screen-lg flex flex-col gap-y-10 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
