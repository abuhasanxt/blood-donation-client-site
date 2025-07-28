import React from 'react';
import { motion } from "framer-motion";
const VolunteerDashboard = () => {
    return (
        <div>
                 <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        Welcome to Volunteer Dashboard 🎉
      </motion.h2>
        </div>
    );
};

export default VolunteerDashboard;