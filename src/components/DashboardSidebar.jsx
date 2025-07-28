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
            <NavLink
              to="dashboard"
              className="flex items-center gap-3 p-2  hover:bg-red-200 transition"
            >
              <FaHome /> <span>Donor Dashboard</span>
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaUser /> <span>My Profile</span>
            </NavLink>
            <NavLink
              to="my-donation"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaTint /> <span>My Donation</span>
            </NavLink>
            <NavLink
              to="my-requests"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaTint /> <span>My Requests</span>
            </NavLink>
            <NavLink
              to="create-request"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaDonate /> <span>Create Request</span>
            </NavLink>
          </>
        )}

        {/* Admin only */}
        {role === "admin" && (
          <>
            <NavLink
              to="dashboard"
              className="flex items-center gap-3 p-2  hover:bg-red-200 transition"
            >
              <FaHome /> <span>Admin Dashboard</span>
            </NavLink>

            <NavLink
              to="/dashboard/profile"
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
              to="/dashboard/all-blood-donation-request"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaTint /> <span>All Blood Requests</span>
            </NavLink>
            <NavLink
              to="/dashboard/content-management"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaBlogger /> <span>Content Management</span>
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
            <NavLink
              to="/dashboard"
              className="flex items-center gap-3 p-2  hover:bg-red-200 transition"
            >
              <FaHome /> <span>Volunteer Dashboard</span>
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaUser /> <span>My Profile</span>
            </NavLink>
            <NavLink
              to="/dashboard/all-blood-donation-request"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaTint /> <span>All Blood Requests</span>
            </NavLink>
            <NavLink
              to="/dashboard/content-management"
              className="flex items-center gap-3 p-2 rounded hover:bg-red-200 transition"
            >
              <FaBlogger /> <span>Content Management</span>
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
