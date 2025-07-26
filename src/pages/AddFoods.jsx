import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddFoods = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log("🚀 ~ AddFoods ~ user:", user);
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    quantity: "",
    location: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      ownerEmail: user.email,
      ownerName: user.displayName,
      ownerImg: user.photoURL,
      status: "available",
    };
    console.log("Form Data Submitted:");

    axios.post("http://localhost:5000/add-food", data).then((res) => {
      if (res.data.insertedId) {
        console.log("🚀 ~ handleSubmit ~ res:", res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Food added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/my-food");
    });
  };

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Add a Foods </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food Image (URL)
          </label>
          <input
            type="url"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expired Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            name="note"
            rows="4"
            value={formData.note}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 w-full cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFoods;
