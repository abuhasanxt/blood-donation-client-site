import axios from "axios";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router";
const FeatureFoods = () => {
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
            className="p-4 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={food.ownerImg}
              alt="photo"
              className=" w-full object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-sm text-gray-600">
                {" "}
                ➡️Owner Name:{food.ownerName}
              </h3>
              <h3 className="text-sm text-gray-600">
                📧 Email:{food.ownerEmail}
              </h3>
              <h3 className="text-sm text-gray-600">
                District: {food.district}
              </h3>
              <p className="text-sm text-gray-600">
                Upazila: <span className="font-medium">{food.upazila}</span>
              </p>
              <p className="text-sm text-gray-600">
                📍 Location:{" "}
                <span className="font-medium">{food.location}</span>
              </p>
              <p className="text-sm text-gray-600">
                ⏳ Date on: <span className="font-medium">{food.date}</span>
              </p>
              <p className="text-sm text-gray-600">
                ⏳Time on: <span className="font-medium">{food.time}</span>
              </p>
              {food.note && (
                <p className="text-sm text-gray-700">📝 {food.note}</p>
              )}
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

export default FeatureFoods;
