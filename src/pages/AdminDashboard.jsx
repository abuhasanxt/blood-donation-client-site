import React, { useEffect, useState } from "react";
import { FaUsers, FaHandHoldingUsd, FaTint } from "react-icons/fa";
import { motion } from "framer-motion";
import useAxiosSecure from "../Utility/axiosSecure";

const AdminDashboard = () => {
 
const [stats, setStats]=useState({
    totalUsers : 120,
   totalFunding : 53420, 
   totalRequests : 87,
})


  const axiosSecure=useAxiosSecure()

  useEffect(()=>{
axiosSecure("/admin-dashboard-stats")
.then(({data})=>setStats(data))

  },[])

  return (
    <div className="p-4 md:p-8">
      {/* Welcome Section */}
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        Welcome to Admin Dashboard 🎉
      </motion.h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users Card */}
        <div className="bg-white shadow-lg p-6 rounded-2xl border hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <FaUsers className="text-4xl text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold">{stats.totalUsers}</h3>
              <p className="text-gray-500 text-sm">Total Donors</p>
            </div>
          </div>
        </div>

        {/* Total Funding Card */}
        <div className="bg-white shadow-lg p-6 rounded-2xl border hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <FaHandHoldingUsd className="text-4xl text-green-600" />
            <div>
              <h3 className="text-xl font-semibold">${stats.totalFunding}</h3>
              <p className="text-gray-500 text-sm">Total Funding</p>
            </div>
          </div>
        </div>

        {/* Total Blood Donation Request Card */}
        <div className="bg-white shadow-lg p-6 rounded-2xl border hover:shadow-xl transition">
          <div className="flex items-center space-x-4">
            <FaTint className="text-4xl text-red-500" />
            <div>
              <h3 className="text-xl font-semibold">{stats.totalRequests}</h3>
              <p className="text-gray-500 text-sm">Blood Requests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

