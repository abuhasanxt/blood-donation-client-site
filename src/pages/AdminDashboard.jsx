import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Utility/axiosSecure";

const AdminDashboard = () => {
  const [donors, setDonors] = useState([]);
  console.log("🚀 ~ AdminDashboard ~ donors:", donors)
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/get-donors").then(({ data }) => setDonors(data));
  }, []);
  return <div>Admin Dashboard
{
    donors.map((donor)=><div key={donor._id}>
        <div>Email: {donor.email}</div>
        <div>Current role: {donor.role}</div>
        <button>Admin</button>
        <button>Volunteer</button>
    </div>)
}
    
  </div>;
};

export default AdminDashboard;
