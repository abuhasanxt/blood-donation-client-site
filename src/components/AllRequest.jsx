import React, { useEffect, useState } from "react";
import { FaUsers, FaHandHoldingUsd, FaTint } from "react-icons/fa";
import { motion } from "framer-motion";
import useAxiosSecure from "../Utility/axiosSecure";

const AllRequest = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalFunding: 0,
    totalRequests: 0,
  });

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure("/admin-dashboard-stats").then(({ data }) => setStats(data));
  }, []);

  return (
    <div className="p-4 md:p-8">
   
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        All Blood Request 🎉
      </motion.h2>

      <div className="bg-white max-w-sm mx-auto shadow-lg p-6 rounded-2xl border hover:shadow-xl transition">
        <div className="flex items-center space-x-4">
          <FaTint className="text-4xl text-red-500" />
          <div>
            <h3 className="text-xl font-semibold">{stats.totalRequests}</h3>
            <p className="text-gray-500 text-sm">Blood Requests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRequest;
