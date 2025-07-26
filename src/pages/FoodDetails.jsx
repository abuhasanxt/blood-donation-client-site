import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { FcBusinessman } from "react-icons/fc";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";

const FoodDetails = () => {

  const {user}=useContext(AuthContext);
  const food = useLoaderData();
const handleRequest=()=>{
  axios
      .patch(`http://localhost:5000/request/${food._id}`, {},{
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => console.log(res.data));
}
  return (
    <div>
      <h2 className="text-xl font-bold text-center">Food Details</h2>
      <div
        key={food._id}
        className="max-w-sm mx-auto bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
      >
        <img src={food.img} alt="photo" className=" w-full object-cover" />
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
          </h3>
          <h3 className="text-sm text-gray-600">
            {" "}
           ID :{food._id}
          </h3>
            ➡️Owner Name:{food.ownerName}
          <h3 className="text-sm text-gray-600">📧 Email:{food.ownerEmail}</h3>
          <h3 className="text-sm text-gray-600">🍔 Food Name: {food.name}</h3>
          <p className="text-sm text-gray-600">
            📦 Quantity: <span className="font-medium">{food.quantity}</span>
          </p>
          <p className="text-sm text-gray-600">
            📍 Location: <span className="font-medium">{food.location}</span>
          </p>
          <p className="text-sm text-gray-600">
            ⏳ Expires on: <span className="font-medium">{food.date}</span>
          </p>
          {food.note && <p className="text-sm text-gray-700">📝 {food.note}</p>}
          <p>🟢Status: {food.status}</p>
          <Link to='/request' onClick={handleRequest} className="btn">Requested</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
