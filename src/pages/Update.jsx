import React from "react";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router";

const Update = () => {
  const navigate = useNavigate();
  const { _id,name,img,quantity,location ,date,note} = useLoaderData();
  const handleUpdateFood = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedFood = Object.fromEntries(formData.entries());
    console.log(updatedFood);

    fetch(`http://localhost:5000/add-food/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food update successfully",
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
        onSubmit={handleUpdateFood}
        className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Update a Foods </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
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
            defaultValue={img}
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
            defaultValue={quantity}
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
            defaultValue={location}
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
            defaultValue={date}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            name="note"
            defaultValue={note}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 w-full text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
