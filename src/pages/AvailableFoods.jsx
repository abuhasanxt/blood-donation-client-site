import axios from "axios";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/available-food")
      .then((res) => setFoods(res.data));
  }, []);
  return (
    <div>
      <motion.h2
        animate={{
          color: ["#ff5733", "#33ff33", "#8a33ff"],
          transition: { duration: 2, repeat: Infinity },
        }}
        className="text-center text-3xl font-bold"
      >
        Available Foods
      </motion.h2>
      {foods.length === 0 ? (
        <div className="text-center space-y-4">
          <p className="text-gray-500 text-xl">No Available foods yet.</p>
          <Link to="/add-food" className="btn btn-primary w-sm">
            Add Request
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-3 gap-5">
          {foods.map((food) => (
            <div
              key={food._id}
              className="p-4 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={food.img}
                alt="photo"
                className=" w-full object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-1">
                  <div>
                    <p className="flex items-center gap-1 text-sm text-gray-600">
                      {" "}
                      <FcBusinessman />
                      Owner Photo :
                    </p>
                  </div>
                  <img
                    className="w-12 rounded-full"
                    src={food.ownerImg}
                    alt="owner"
                  />
                </div>
                <h3 className="text-sm text-gray-600">
                  {" "}
                  ➡️Owner Name:{food.ownerName}
                </h3>
                <h3 className="text-sm text-gray-600">
                  📧 Email:{food.ownerEmail}
                </h3>
                <h3 className="text-sm text-gray-600">
                  🍔 Food Name: {food.name}
                </h3>
                <p className="text-sm text-gray-600">
                  📦 Quantity:{" "}
                  <span className="font-medium">{food.quantity}</span>
                </p>
                <p className="text-sm text-gray-600">
                  📍 Location:{" "}
                  <span className="font-medium">{food.location}</span>
                </p>
                <p className="text-sm text-gray-600">
                  ⏳ Expires on:{" "}
                  <span className="font-medium">{food.date}</span>
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
      )}
    </div>
  );
};

export default AvailableFoods;
