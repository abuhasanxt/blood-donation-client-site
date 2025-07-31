import React from "react";
import { Link, NavLink } from "react-router";
import {
  FaHome,
  FaUser,
  FaTint,
  FaUsersCog,
  FaBlogger,
  FaDonate,
  FaBars,
} from "react-icons/fa";

const DashboardSidebar = ({ role, loading }) => {
  if (loading) {
    return (
      <div className="w-64  flex items-center justify-center bg-red-100">
        <span className="loading loading-spinner text-red-500 text-xl"></span>
      </div>
    );
  }
  return (
    <div className="bg-red-100 min-h-screen  p-4 border-r border-red-300 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-red-600 mb-6 text-center">
        BloodCare
      </div>

      {/* Navigation Links */}
      <nav className="space-y-2">
        {/* Donor only */}

        {role === "donor" && (
          <>
            <h2 className="bg-green-200 flex items-center gap-3 p-2  ">
              <FaHome /> <span>Donor Dashboard</span>
            </h2>

            <NavLink
              to="/dashboard/my-profile"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaUser /> <span>My Profile</span>
            </NavLink>
            <NavLink
              to="/dashboard/my-donation"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaTint /> <span>My Donation</span>
            </NavLink>
            <NavLink
              to="/dashboard/my-requests"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaTint /> <span>My Requests</span>
            </NavLink>
            <NavLink
              to="/dashboard/create-request"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaDonate /> <span>Create Request</span>
            </NavLink>
          </>
        )}

        {/* Admin only */}
        {role === "admin" && (
          <>
            <h2 className="flex items-center gap-3 p-2  bg-green-200">
              <FaHome /> <span>Admin Dashboard</span>
            </h2>

            <NavLink
              to="/dashboard/my-profile"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaUser /> <span>My Profile</span>
            </NavLink>
            <NavLink
              to="/dashboard/all-users"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaUsersCog /> <span>All Users</span>
            </NavLink>
            <NavLink
              to="/dashboard/all-request"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaTint /> <span>All Blood Requests</span>
            </NavLink>

            <NavLink
              to="/dashboard/funding"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaDonate /> <span>Funding</span>
            </NavLink>
          </>
        )}

        {/* Volunteer only */}
        {role === "volunteer" && (
          <>
            <h2 className="flex bg-green-200 items-center gap-3 p-2 ">
              <FaHome /> <span>Volunteer Dashboard</span>
            </h2>

            <NavLink
              to="/dashboard/my-profile"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaUser /> <span>My Profile</span>
            </NavLink>
            <NavLink
              to="/dashboard/all-request"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaTint /> <span>All Blood Requests</span>
            </NavLink>
           
          </>
        )}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
