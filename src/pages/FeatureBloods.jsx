import axios from "axios";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router";
const FeatureBloods = () => {
  const [foods, setFoods] = useState([]);
  console.log("🚀 ~ FeatureFoods ~ foods:", foods);

  useEffect(() => {
    axios
      .get("https://mission-scic12-server-template.vercel.app/feature-food")
      .then((res) => setFoods(res.data));
  }, []);
  return (
    <div>
      <motion.h2
        animate={{
          color: ["#ff5733", "#33ff33", "#40E0D0"],
          transition: { duration: 2, repeat: Infinity },
        }}
        className="text-center  text-3xl font-extrabold"
      >
        Feature Bloods
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-gradient-to-br from-red-100 via-white to-red-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <img
              src={food.ownerImg}
              alt="photo"
              className=" w-full h-90 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-sm text-gray-600">
                {" "}
                ➡️Owner Name:{food.ownerName}
              </h3>
              <h3 className="text-sm text-gray-600">
                📧 Email:{food.ownerEmail}
              </h3>
           
            
          
             
             
             
              <p>🟢Status: {food.status}</p>
              <Link to={`/details/${food._id}`} className="btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link className="btn btn-primary w-md" to="/available-food">
          See All
        </Link>
      </div>
    </div>
  );
};

export default FeatureBloods;
