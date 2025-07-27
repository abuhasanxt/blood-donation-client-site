import React from "react";

import { Outlet } from "react-router";
import DashboardSidebar from "../components/DashboardSidebar";
import useRole from "../Utility/useRole";

const DashboardLayout = () => {
  const { role,loading } = useRole()
  return (
    <div className="flex">
      <DashboardSidebar loading={loading} role={role} />
      <div className="flex-1 p-4 bg-gray-50 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
