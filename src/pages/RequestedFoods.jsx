import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router";

const RequestedFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (user?.accessToken) {
      axios
        .get("http://localhost:5000/request", {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((res) => {
          setFoods(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl text-center font-bold mb-4">
        📋 Requested Foods
      </h2>
      {foods.length === 0 ? (
        <div className="text-center space-y-4">
            <p className="text-gray-500 text-xl">No requested foods yet.</p>
            <Link to='/available-food' className="btn btn-primary w-sm">Food Request</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {foods.map((food) => (
            <div
              key={food._id}
              className="w-full bg-white shadow-md rounded-xl overflow-hidden  hover:shadow-lg transition"
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
                <h3 className="text-sm text-gray-600"> </h3>
                <h3 className="text-sm text-gray-600"> ID :{food._id}</h3>
                ➡️Owner Name:{food.ownerName}
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
                <p className="text-sm text-green-600">
                  ✅Status: {food.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestedFoods;
