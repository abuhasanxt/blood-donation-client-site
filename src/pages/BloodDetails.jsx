import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { FcBusinessman } from "react-icons/fc";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import StripePayment from "../components/StripePayment";

const BloodDetails = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const food = useLoaderData();
  const navigate=useNavigate()
  const handleRequest = () => {
    axios
      .patch(
        `http://localhost:5000/request/${food._id}`,
        {donationAmount},
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        setIsOpen(false)
        navigate("/dashboard/my-requests")
        console.log(res.data)});
  };
  return (
    <div>
      <h2 className="text-xl font-bold text-center">Blood Details</h2>
      <div
        key={food._id}
        className="max-w-sm mx-auto bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
      >
        <img src={food.ownerImg} alt="photo" className=" w-full object-cover" />
        <div className="p-4 space-y-2">
          ➡️Owner Name:{food.ownerName}
          <h3 className="text-sm text-gray-600">📧 Email:{food.ownerEmail}</h3>
          <h3 className="text-sm text-gray-600">District: {food.district}</h3>
          <p className="text-sm text-gray-600">
            📦Upazila: <span className="font-medium">{food.upazila}</span>
          </p>
          <p className="text-sm text-gray-600">
            📍 Location: <span className="font-medium">{food.location}</span>
          </p>
          <p className="text-sm text-gray-600">
            ⏳ Date: <span className="font-medium">{food.date}</span>
          </p>
          <p className="text-sm text-gray-600">
            ⏳ Time: <span className="font-medium">{food.time}</span>
          </p>
          {food.note && <p className="text-sm text-gray-700">📝 {food.note}</p>}
          <p>🟢Status: {food.status}</p>
          <button
           
            onClick={() => setIsOpen(true)}
            className="btn"
          >
            Requested
          </button>
        </div>
      </div>

      <dialog
        className="h-screen w-screen bg-black/30 fixed inset-0"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex items-center justify-center h-full">
          <div className="w-[350px] p-5 rounded-2xl bg-white">
            <label>Donation Amount:</label>
            <input
              onChange={(e) => setDonationAmount(e.target.value)}
              value={donationAmount}
              className="border w-full p-2"
              type="number"
              min={1}
            />
            <StripePayment handleRequest={handleRequest} amount={donationAmount} />
            <div className="flex justify-end mt-2">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-600 text-white btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BloodDetails;
