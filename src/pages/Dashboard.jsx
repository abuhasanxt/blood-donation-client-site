import React from "react";
import useRole from "../Utility/useRole";
import { Navigate } from "react-router";

const Dashboard = () => {
  const { role, loading } = useRole();
  console.log("🚀 ~ Dashboard ~ role:", role);
  if (loading) {
    return <span className="loading loading-dots loading-xl"></span>;
  }

  if (role=== "donor") {
   return <h2>Donor Dashboard</h2>
  }
  if (role=== "admin") {
    return <h2>Admin Dashboard</h2>
  }
  return <Navigate to='/'></Navigate>
};

export default Dashboard;
