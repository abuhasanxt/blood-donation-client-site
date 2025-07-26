import React from "react";
import useRole from "../Utility/useRole";
import { Navigate } from "react-router";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  const { role, loading } = useRole();
  console.log("🚀 ~ Dashboard ~ role:", role);
  if (loading) {
    return <span className="loading loading-dots loading-xl"></span>;
  }

  if (role=== "donor") {
   return <h2>Donor Dashboard</h2>
  }
  if (role=== "volunteer") {
   return <h2>Volunteer Dashboard</h2>
  }
  if (role=== "admin") {
    return <AdminDashboard></AdminDashboard>
  }
  return <Navigate to='/'></Navigate>
};

export default Dashboard;
