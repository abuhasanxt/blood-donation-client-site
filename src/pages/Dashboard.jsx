import React from "react";
import useRole from "../Utility/useRole";
import { Navigate } from "react-router";
import AdminDashboard from "./AdminDashboard";
import DonorDashboard from "./DonorDashboard";
import VolunteerDashboard from "./VolunteerDashboard";

const Dashboard = () => {
  const { role, loading } = useRole();
  console.log("🚀 ~ Dashboard ~ role:", role);
  if (loading) {
    return <span className="loading loading-dots loading-xl"></span>;
  }

  if (role=== "donor") {
   return <DonorDashboard></DonorDashboard>
  }
  if (role=== "volunteer") {
   return <VolunteerDashboard></VolunteerDashboard>
  }
  if (role=== "admin") {
    return <AdminDashboard></AdminDashboard>
  }
  return <Navigate to='/'></Navigate>
};

export default Dashboard;
