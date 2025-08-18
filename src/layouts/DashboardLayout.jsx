// import React from "react";

// import { Outlet } from "react-router";
// import DashboardSidebar from "../components/DashboardSidebar";
// import useRole from "../Utility/useRole";

// const DashboardLayout = () => {
//   const { role,loading } = useRole()
//   return (
//     <div className="flex mt-16">
//       <DashboardSidebar loading={loading} role={role} />
//       <div className="flex-1 p-4 bg-gray-50 min-h-screen">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;



import React, { useState } from "react";
import { Outlet } from "react-router";
import DashboardSidebar from "../components/DashboardSidebar";
import useRole from "../Utility/useRole";
import Header from "../components/Header"; // আগের Navbar import করলাম
import { FaBars, FaTimes } from "react-icons/fa";

const DashboardLayout = () => {
  const { role, loading } = useRole();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Always Visible Header/Navbar */}
      <Header />

      {/* ✅ Main Layout */}
      <div className="flex flex-1 pt-16"> 
        {/* pt-16 → কারণ navbar fixed, তাই নিচে gap রাখা হলো */}

        {/* Sidebar */}
        <div
          className={`fixed lg:static top-16 left-0 h-full z-40 transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <DashboardSidebar loading={loading} role={role} />
        </div>

        {/* Toggle Button (only for mobile) */}
        <button
          className="lg:hidden fixed top-20 left-4 z-50 bg-red-600 text-white p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-50 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
